// const buildTable = books =>  books.map((book, index) =>
// `
//     <tr>
//         <td> ${book.id} </td>
//         <td> ${book.genre} </td>
//         <td>
//             <span>${book[BookProperties.PRICE]}</span>$
//         </td>
//         <td>
//             ${book.rate}
//         </td>
//         <td>
//             <button class="details-btn" onclick="onReadBook('${book.id}')"> <span data-trans="details"> Details</span> </button>
//         </td>
//         <td>
//             <button class="btn-remove" onclick="onDeleteBook('${book.id}')">
//                 <span data-trans="delete" >Delete</span> 
//             </button>
//         </td>
//         <td>
//             <button class="update-btn" onclick="onUpdateBook('${book.id}')">
//             <span data-trans="update">Update</span> 
//             </button>

//         </td>
//         <td class="update-rate-btn">
//             <button onclick="changeTheRating(${index}, false )">-</button>
//             <button onclick="changeTheRating(${index}, true)">+</button>
//         </td>
//     </tr>
// `
// // || undefined
// ) :
// books.map((book, index) => console.log('table list') ||
// `  <article class="book-preview">



// <div class='img-cover'>
// <img 
// class="img-book"
// onerror="this.src='img/defaulted_book_img.jpeg'" 
// src="img/${book.name}.jpeg" 
// alt="book by ${book.author}"
// >
// </div>


// <button
// class="btn-remove" 
// onclick="onDeleteBook('${book.id}')"
// >
// X
// </button>

// <div class="book-content-container">
// <h2 data-trans="${book.genre}">${book.genre}</h2>

// <h6>
// <span data-trans="price" class="price-book-container"> price: </span>
// </br>
// ${book[BookProperties.PRICE]}
// $
// </h6>

// <h6>
// <span data-trans="rate">rate</span> 
// <span>${book.rate}  
// <button onclick="changeTheRating(
//     ${index}, false
//     )">-</button>
// <button onclick="changeTheRating(
//         ${index}, true
//     )">+</button>
// </span>
// </h6>

// <button onclick="onReadBook('${book.id}')" > <span data-trans="details">  Details</span>  </button>
// <button onclick="onUpdateBook('${book.id}')">   <span data-trans="update">  Update</span> </button>



// </article> 
// `

// function renderBooksUx() {
//     console.log('gIsTable b', gIsTable);
//     gIsTable = !gIsTable
//     if (!gIsTable) {
//         var elTable = document.querySelector('.table-prev-next-btn-container').innerHTML = ''
//     }
//     else {
//         document.querySelector('.books-container').innerHTML = ''
//        console.log('if B');
//     }
//     // gIsTable = !gIsTable
//     console.log('gIsTable a', gIsTable);
//     renderBooks()
// }







// <tr>

// <td> ${book.id} </td>
// <td data-trans="${book.genre}" > ${book.genre} </td>

// <td>
//     <span>${book[BookProperties.PRICE]}</span>$
// </td>

// <td>
//     ${book.rate}
// </td>

// <td>
//     <button class="details-btn" 
//             onclick="onReadBook('${book.id}')"> 
//                 <span data-trans="details"> 
//                      Details
//                 </span>
//     </button>
// </td>

// <td>
//     <button class="btn-remove" onclick="onDeleteBook('${book.id}')">
//         <span data-trans="delete" >Delete</span> 
//     </button>
// </td>

// <td>
//     <button class="update-btn" onclick="onUpdateBook('${book.id}')">
//     <span data-trans="update">Update</span> 
//     </button>
// </td>

// <td class="update-rate-btn">
//     <button onclick="changeTheRating(${index}, false )">-</button>
//     <button onclick="changeTheRating(${index}, true)">+</button>
// </td>

// </tr>

// <tr>

// <td> ${book.id} </td>
// <td data-trans="${book.genre}" > ${book.genre} </td>

// <td>
//     <span>${book[BookProperties.PRICE]}</span>$
// </td>

// <td>
//     ${book.rate}
// </td>

// <td>
//     <button class="details-btn" 
//             onclick="onReadBook('${book.id}')"> 
//                 <span data-trans="details"> 
//                      Details
//                 </span>
//     </button>
// </td>

// <td>
//     <button class="btn-remove" onclick="onDeleteBook('${book.id}')">
//         <span data-trans="delete" >Delete</span> 
//     </button>
// </td>

// <td>
//     <button class="update-btn" onclick="onUpdateBook('${book.id}')">
//     <span data-trans="update">Update</span> 
//     </button>
// </td>

// <td class="update-rate-btn">
//     <button onclick="changeTheRating(${index}, false )">-</button>
//     <button onclick="changeTheRating(${index}, true)">+</button>
// </td>

// </tr>