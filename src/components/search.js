import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [searchTerm, SetSerachTerm] = useState('programming');
  const [results, SetResult] = useState([]);

  const setFormSearchTerm = (formSearchTerm) => {
    SetSerachTerm(formSearchTerm);
  };

  const renderedResults = results.map((item) => {
    return (
      <a
        href={`https://en.wikipedia.org?curid=${item.pageid}`}
        className="list-group-item list-group-item-action"
        aria-current="true"
        key={item.pageid}
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{item.title}</h5>
        </div>
        {/* very bad dangerouslySetInnerHTML would allow XSS */}
        <span
          className="mb-1"
          dangerouslySetInnerHTML={{ __html: item.snippet }}
        ></span>
      </a>
    );
  });

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: searchTerm,
        },
      });
      SetResult(data?.query?.search);
    };

    {
      /*Handle Search on first Page Load without setTimeOut*/
    }
    if (searchTerm && !results.length) {
      search();
    } else {
      {
        /*Do Search after 500 ms to avoid searching on each term change*/
      }
      const timeOutId = setTimeout(() => {
        if (searchTerm) {
          search();
        }
      }, 500);

      {
        /*clear timeout set to call the search on each re render the cleanup func*/
      }
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [searchTerm]);

  return (
    <form>
      <div className="mb-3">
        <label className="form-label">Input Search Term Here Here</label>
        <input
          value={searchTerm}
          type="text"
          className="form-control"
          id="searchTermm"
          onChange={(e) => {
            setFormSearchTerm(e.target.value);
          }}
        />
      </div>
      <div class="list-group">{renderedResults}</div>
    </form>
  );
};

export default Search;
