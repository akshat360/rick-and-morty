import React, { useState, useEffect } from 'react';
import Card from './Card';
import './style.css';
import Pagination from 'react-js-pagination';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState({});
  const [pageNo, setpageNo] = useState(1);
  const [page, setPage] = useState('https://rickandmortyapi.com/api/episode/');
  const [searchText, setSearchText] = useState('');

  const fetchingData = (link) => {
    return fetch(link, { method: 'GET' })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const loadEpisodes = (link) => {
    //fetching Episodes

    fetchingData(link).then((data) => {
      if (data.error) {
        setError(data.error);
        console.log(data.error);
      } else {
        const { info, results } = data;
        setError(null);
        setEpisodes(results);
        setInfo(info);
      }
    });
  };

  useEffect(() => {
    loadEpisodes(page);
  }, [pageNo, page]);

  const showEpisodes = () => (
    <div className="d-flex flex-column p-2 justify-content-md-center ">
      <h1 className="font-b text-white px-5">Episodes</h1>
      {episodes.map((episode, index) => {
        return (
          <div key={index} className="mx-5 py-2">
            <Card
              name={episode.name}
              air_date={episode.air_date}
              url={episode.url}
              episode={episode.episode}
            />
          </div>
        );
      })}
    </div>
  );

  const handlePageChange = (pageNumber) => {
    setpageNo(pageNumber);
    setPage(`https://rickandmortyapi.com/api/episode?page=${pageNumber}`);
  };

  const pageNav = () => {
    return (
      <div className="row justify-content-center">
        <Pagination
          hideFirstLastPages
          activePage={pageNo}
          itemsCountPerPage={20}
          totalItemsCount={info.count}
          pageRangeDisplayed={info.pages}
          onChange={handlePageChange.bind(this)}
          itemClass="page-item bg-dark text-white"
          linkClass="page-link "
        />
      </div>
    );
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
    if (e.key === 'Enter') {
      let url = `https://rickandmortyapi.com/api/episode?name=${searchText}`;
      url = url.trim().replace(/\s/g, '%20');

      setPage(url);

      setSearchText('');
    }
  };

  const searchForm = () => {
    return (
      <input
        className="form-control "
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={searchText}
        onKeyDown={handleInputChange}
        onChange={handleInputChange}
      />
    );
  };
  return (
    <div className="container">
      <div className="mt-5">{searchForm()}</div>
      {error !== null && (
        <div className="alert alert-danger text-center my-1">
          Search not Found{' '}
        </div>
      )}
      <div className="mt-5">{pageNav()}</div>
      <div className="pb-5"> {showEpisodes()}</div>
      <div className="pb-5">{pageNav()}</div>
    </div>
  );
}
