// let currentLanguage = 'he'

var gTableTitleItems = ['id', 'title', 'price', 'rate', 'details', 'delete', 'update', 'Change-Rate']
var gGenre = ['comedy', 'action', 'romantic', 'biography', 'science']

const MoviesGenres = {
    ACTION: 'action',
    COMEDY: 'comedy',
    BIOGRAPHY: 'biography',
    SCIENCE: 'science',
    ROMANTIC: 'romantic'
}

const i18n = {
    filter: {
        en: 'filter',
        he: 'פילטר',
    },
    title: {
        en: 'Book shop',
        he: 'חנות ספרים'
    },
    MinPrice: {
        en: 'Min Price',
        he: 'מחיר מינימלי'
    },
    MaxPrice: {
        en: 'Max Price',
        he: 'מחיר מקסימלי'
    },
    Search: {
        en: 'Search',
        he: 'חיפוש'
    },
    'select-filter': {
        en: 'select-filter',
        he: 'בחירת פילטר',
    },
    'select-sorting':
    {
        en: 'select-filter',
        he: 'מיון',
    },
    'by-price': {
        en: 'by price',
        he: 'מחיר',
    },
    'rate': {
        en: 'rate',
        he: 'דירוג',
    },
    'descending': {
        en: 'descending',
        he: 'מיון בסדר יורד',
    },
    'price-filter': {
        en: 'price-filter',
        he: 'סנן לפי מחיר',
    },
    'details': {
        en: 'details',
        he: 'פרטים'
    },
    'delete': {
        en: 'delete',
        he: 'מחיקה'
    },
    'update': {
        en: 'update',
        he: 'עדכון'
    },
    'previous': {
        en: 'previous',
        he: 'הקודם'
    },
    'next': {
        en: 'next',
        he: 'הבא'
    },
    'currency': {
        en: '$',
        he: '₪'
    },
    'add-book': {
        en: 'add-book',
        he: 'הוסף ספר'
    },
    'search-placeholder':
    {
        en: 'search..',
        he: 'חפש..'
    },
    'sort-by': {
        en: 'sort-by',
        he: 'מיון על ידי'
    },
    price: {
        en: 'price',
        he: 'מחיר'
    },
    // genre: {
    action: {
        en: 'action',
        he: 'פעולה'
    },
    comedy: {
        en: 'comedy',
        he: 'קומדיה'
    },
    biography: {
        en: 'biography',
        he: 'ביאוגרפיה'
    },
    science: {
        en: 'science',
        he: 'מדעים'
    },
    romantic: {
        en: 'romantic',
        he: 'רומנטיקה'
    },
    id: {
        en: 'id',
        he: 'איי-די'
    },
    title: {
        en: 'title',
        he: 'כותרת'
    },
    price: {
        en: 'price',
        he: 'מחיר'
    },
    'Change-Rate': {
        en: 'change-rate',
        he: 'שינוי דירוג'
    },
    'קומדיה': {
        en: 'comedy',
        he: 'קומדיה'
    },
    'ביאוגרפיה': {
        en: 'biography',
        he: 'ביאוגרפיה'
    }, 'מדעים': {
        en: 'science',
        he: 'מדעים'
    }, 'פעולה': {
        en: 'action',
        he: 'פעולה'
    }, 'רומנטיקה': {
        en: 'romantic',
        he: 'רומנטיקה'
    }, 'title-hedline': {
        en: 'book-shop',
        he: 'חנות ספרים',
    }, options: {
        en: 'options',
        he: 'אפשרויות'
    }

}

const onSetLang = () => {

    currentLanguage = new URLSearchParams(window.location.search).get('lang')
    doTrans()
    document.querySelector('.lang-select').value = currentLanguage

}

const getTranslate = key => i18n[key][currentLanguage]

