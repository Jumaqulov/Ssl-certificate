import React from 'react';

const Pagination = ({ newsPerPage, totalNews, paginate, currentPage }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    if (pageNumbers.length <= 1) {
        return null;
    }

    return (
        <nav className="pagination-nav">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                        <button 
                            onClick={() => paginate(number)} 
                            className={`page-link ${number === currentPage ? 'btn-active' : ''}`}
                        >
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;