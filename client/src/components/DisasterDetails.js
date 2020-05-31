import React, { useState, useEffect } from 'react'

export default function DisasterDetails(props) {
  let param = props.match.params.data;
  const country = param.substring(0, param.indexOf('-'));
  param = param.substring(param.indexOf('-') + 1, param.length);
  const disaster =  param.substring(0, param.indexOf('-'));
  param = param.substring(param.indexOf('-') + 1, param.length);
  const id = param;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getArticles(id);
      setArticles(result);
    };

    fetchData();
  });

  return (
    <div id='disaster-details' className='container'>
      <h1>{disaster}</h1>
      <h3>{country}</h3>
      <section dangerouslySetInnerHTML={{__html: articles}}></section>
    </div>
  )
}

function getArticles(id) {
  let text = fetch("https://api.reliefweb.int/v1/disasters/" + id)
    .then(res => res.json())
    .then(data => {
      text = data.data[0].fields.profile['overview-html'];
      return text;
    })
    .catch(err => console.log(err));

    return text;
}
