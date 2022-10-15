var gIsTable = true

const BookProperties = {
    RATE: 'rate',
    PRICE: 'price',
    ID: 'id'
}

const Language = {
    en: 'English',
    he: 'עברית'

}

const setLanguageUrl = () => {
    if (!new URLSearchParams(window.location.search).get('lang')) {
        window.location = "/?lang=en"
    }
}
function onInit() {
    setLanguageUrl()
    renderFilterByQueryStringParams()
    _createBooks()
    renderBooks()
    renderNextPages()
    onSetLang()
}

const onSelectLang = (language) => {
    window.location = `/?lang=${language}`
    onSetLang()
    doTrans()
}

const renderFilterByQueryStringParams = () => {
    const queryStringParams = new URLSearchParams(window.location.search)
    const filterByMinPrice = queryStringParams.get('minPrice') || 0
    const filterByMaxPrice = queryStringParams.get('maxPrice') || 0
    const filterByRate = queryStringParams.get(BookProperties.RATE) || 0

    if (!filterByMaxPrice && !filterByRate && !filterByMinPrice) {
        return
    }

    const filterBy = {
        minPrice: filterByMinPrice,
        maxPrice: filterByMaxPrice,
        rate: filterByRate,
        price: 0
    }

    document.querySelector('.filter-book-select').value = filterBy.minPrice || filterBy.maxPrice || filterBy.rate
    setBookFilter(filterBy)
}


function renderBooksUx() {
    gIsTable = !gIsTable

    if (!gIsTable) {
        var elTable = document.querySelector('.table-responsive-sm').style.display = 'none'
        // document.querySelector(".table-headline").style.display = 'none'

        document.querySelector('.books-container').style.display = 'block'
    }
    else {
        
        document.querySelector('.books-container').style.display = 'none'
        // document.querySelector(".table-headline").style.display = 'block'
        var elTable = document.querySelector('.table-responsive-sm').style.display = 'block'
    }
    renderBooks()
    doTrans()
}


function renderBooks() {
    var books = getBooks()
    const elHeadlineTable = document.querySelector('.table-headline')

    // Paging:
    const startIdx = gPageIdx * PAGE_SIZE // 0// 5
    books = books.slice(startIdx, startIdx + PAGE_SIZE) || ''//(0,5)//(5,10)

    var headlineHTML = gTableTitleItems.map(item => `<td data-trans="${item}">${item}</td>`)

    var strHtmls = gIsTable ?
        books.map
            (
                (book, index) =>
                    `
                <tr>

                    <td> ${book.id} </td>
                    <td data-trans="${book.genre}" > ${book.genre} </td>

                    <td>
                        <span>${book[BookProperties.PRICE]}</span>$
                    </td>

                    <td>
                        ${book.rate}
                    </td>

                    <td>
                        <button class="details-btn" 
                                onclick="onReadBook('${book.id}')"> 
                                    <span data-trans="details"> 
                                         Details
                                    </span>
                        </button>
                    </td>

                    <td>
                        <button class="btn-remove" onclick="onDeleteBook('${book.id}')">
                            <span data-trans="delete" >Delete</span> 
                        </button>
                    </td>

                    <td>
                        <button class="update-btn" onclick="onUpdateBook('${book.id}')">
                        <span data-trans="update">Update</span> 
                        </button>
                    </td>

                    <td class="update-rate-btn">
                        <button onclick="changeTheRating(${index}, false )">-</button>
                        <button onclick="changeTheRating(${index}, true)">+</button>
                    </td>

                </tr>
                `

            )
        :

        books.map((book, index) =>
            `  
       
          


            <article class="book-preview">
            
            <button
             class="btn-remove btn bg-warning" 
             onclick="onDeleteBook('${book.id}')"
            >
                X
            </button>

            <div class="container-img-and-info">

                    <div class='img-cover'>
                        <img 
                         class="img-book"
                         onerror="this.src='img/defaulted_book_img.jpeg'" 
                         src="img/${book.name}.jpeg" 
                         alt="book by ${book.author}"
                         >
                    </div>
        
                    
                    
                    <div class="book-content-container">
                    

                    <h2 data-trans="${book.genre}">${book.genre}</h2>
        
                     <h6>
                        <span data-trans="price" class="price-book-container"> price: </span>
                        </br>
                        ${book[BookProperties.PRICE]}$
                    </h6>
                    
                    <div class="rate-elements">

                    </div>
                    <h6>
                       <span data-trans="rate">rate:</span> 
                       <span>${book.rate}  
                    </h6>
                    
                    <h6>
                        <button  class ="btn btn-dark" onclick="changeTheRating(
                                 ${index}, false
                                 )">-</button>
                             <button class ="btn btn-dark" onclick="changeTheRating(
                                     ${index}, true
                                 )">+</button>
                         </span>
                     </h6>
                    
           
                    <div class="details-and-update-btns">
                         <button class = "btn btn-success" onclick="onReadBook('${book.id}')" > <span data-trans="details">  Details</span>  </button>
                         <button class = "btn btn-warning" onclick="onUpdateBook('${book.id}')">   <span data-trans="update">  Update</span> </button>
                    </div>

                </div>
            </div>

        </article> 
        `
        )


    if (gIsTable) {
        var elTableContainer = document.querySelector('.table-container')
        if (elTableContainer) elTableContainer.innerHTML = strHtmls.join('')
        elHeadlineTable.innerHTML = headlineHTML.join('')

    } else {
        document.querySelector('.books-container').innerHTML = strHtmls.join('')
    }
}

function onSetSortBy() {
    const selectedFilter = document.querySelector('.sort-by').value
    const isDesc = document.querySelector('.sort-desc').checked
    setBookSort(selectedFilter, isDesc)
    renderBooks()
    doTrans()

}

function onSetFilterBy(filterBy = {}) {

    gFilterBy = setBookFilter(filterBy)
    renderBooks()
    doTrans()

    const selectedFilter = document.querySelector('.filter-book-select').value
    const selectedPrice = document.querySelector('.filter-price-range').value

    const queryStringParams = `?${selectedFilter}=${selectedPrice}`
    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname + queryStringParams
    window.history.pushState({ path: newUrl }, '', newUrl)
}

function onDeleteBook(bookId) {
    deleteBook(bookId)
    renderBooks()
    doTrans()

    flashMsg(`Book Deleted`)
}

function onUpdateBook(bookId) {
    const book = getBookById(bookId)
    var newPrice = +prompt('price?', '100')
    if (newPrice && book.price !== newPrice) {
        const book = updateBook(bookId, newPrice)
        renderBooks()
        doTrans()

        flashMsg(`Price updated to: ${book.price}$`)
    }
}

function onAddBook() {
    var genre = prompt('genre?', 'comedy')
    if (genre) {
        const book = addBook(genre)
        renderBooks()
        doTrans()

        flashMsg(`Book Added (id: ${book.id})`)
    }
}

function flashMsg(msg) {
    const elMsg = document.querySelector('.user-msg')
    elMsg.innerText = msg
    elMsg.classList.add('open')
    setTimeout(() => {
        elMsg.classList.remove('open')
    }, 3000)
}

function onReadBook(bookId) {
    var book = getBookById(bookId)
    var elModal = document.querySelector('.modal')
    elModal.querySelector('h3').innerText = book.genre || ''
    elModal.querySelector('h4 span').innerText = book.price
    elModal.querySelector('p').innerText = book.desc
    elModal.classList.add('open')
}

function onCloseModal() {
    document.querySelector('.modal').classList.remove('open')
}


function nextPage(diff, isNextPage) {

    if (diff) {
        gPageIdx = diff
        gDiffPages = diff
        return
    } else if (isNextPage) {
        gPageIdx++
    } else if (!isNextPage) {
        gPageIdx--
    }

    if (gPageIdx * PAGE_SIZE >= gBooks.length || gPageIdx * PAGE_SIZE < 0) {
        gPageIdx = 0
    }
}

function onNextPage(diff = 0, isNextPage = true) {
    nextPage(diff, isNextPage)
    renderBooks()
    doTrans()

}

function changeTheRating(index, isIncreasing) {
    //todo: fix the bug - not always the buttons works
    const book = getBooks()[index]
    if (isIncreasing && book.rate === 10 ||
        !isIncreasing && !book.rate) {
        return
    }

    updateBookProperty(
        book.id,
        BookProperties.RATE,
        isIncreasing
            ? book.rate + 1
            : book.rate - 1
    )
    console.log('book.rate', book.rate);
    renderBooks()
    doTrans()

}

function renderNextPages() {
    const elPages = document.querySelector('.pagination_section')
    const amountPages = gBooks.length - 1 / PAGE_SIZE
    var strHTML = `<a onclick="onNextPage( 0, false)">&lArr; <span data-trans="previous">Previous</span> </a>`
    //todo:change this : strHTML += ['a', 'b','c']
    strHTML += ['a', 'b', 'c'].map((page, index) => `<a onclick="onNextPage(${index})">${index + 1}</a>`).join('')
    strHTML += `<a onclick="onNextPage(0,true)"> <span data-trans="next">Next</span>  &rArr;</a>`
    elPages.innerHTML = strHTML
}

const doTrans = () => {
    const elementsToTranslate = document.querySelectorAll('[data-trans]')
    elementsToTranslate.forEach(el => {
        el.innerText = getTranslate(el.dataset.trans)
    })
}  