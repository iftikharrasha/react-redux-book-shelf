import React, { useEffect } from 'react';
import Book from '../components/Book/Book';
import PageLayout from '../components/PageLayout/PageLayout';
import { useSelector } from 'react-redux';
import { fetchBooks } from '../redux/slices/bookSlice'
import { useDispatch } from 'react-redux';

const Discover = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchBooks());
    }, [])

    const discover = useSelector((state) => state.books.discover)

    return (
        <PageLayout>
            {
                discover.map((book) => (<Book key={book.id} book={book} />))
            }
        </PageLayout>
    );
};

export default Discover;