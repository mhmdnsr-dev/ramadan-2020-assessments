'use strict';

import { BASE_URL, CARD_HTML } from './constant.js';

// Sent video request handling
const form = document.getElementById('video-request');
const submitBtn = document.querySelector('button[type="submit"]');
const listOfRequestsContainer = document.getElementById('listOfRequests');

const sentVideoReq = async body => {
  try {
    const res = await fetch(`${BASE_URL}/video-request`, {
      method: 'POST',
      body,
    });
    if (res.ok) return await res.json();
    else throw new Error(res.statusText);
  } catch (error) {
    console.error('Error when sent video request', error);
  }
};

if (form) {
  form.addEventListener('submit', async e => {
    e.preventDefault();
    submitBtn.textContent = 'Loading....';

    const formData = new FormData(form);
    const savedVideoReq = await sentVideoReq(formData);

    form.reset();
    submitBtn.textContent = 'Send video request';

    listOfRequestsContainer.insertAdjacentHTML(
      'afterbegin',
      CARD_HTML(savedVideoReq)
    );
  });
}

// List of requested videos
const fetchlistOfRequests = async () => {
  try {
    const res = await fetch(`${BASE_URL}/video-request`);
    if (res.ok) return res.json();
    else throw new Error(res.statusText);
  } catch (error) {
    console.error('Error when get all video requests', error);
  }
};

listOfRequestsContainer.innerHTML = `<p class=" text-center">Loading... </p>`;
fetchlistOfRequests().then(data => {
  listOfRequestsContainer.innerHTML = '';
  if (data.length > 0)
    for (const req of data)
      listOfRequestsContainer.insertAdjacentHTML('afterbegin', CARD_HTML(req));
  else
    listOfRequestsContainer.innerHTML = `<p class="text-danger text-center">No requests found 😪</p>`;
});
