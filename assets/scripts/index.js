'use strict';

// import { duration } from 'moment';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyA7hC15i_G_STqoG0lnk1MPiyBuGgULyEE',
  authDomain: 'train-schedule-b438c.firebaseapp.com',
  databaseURL: 'https://train-schedule-b438c.firebaseio.com',
  projectId: 'train-schedule-b438c',
  storageBucket: 'train-schedule-b438c.appspot.com',
  messagingSenderId: '120902791784',
};
firebase.initializeApp(config);

const database = firebase.database();
let trainName = '';
let destination = '';
let frequency = '';
const nextArrival = '';
const minutesAway = '';
let firstTrainTime = '';
const currentTime = moment().format('HH:mm');
console.log(currentTime);

$(document).ready(function () {
  // records what my user inputs
  $('#add-train-btn').on('click', function(e) {
    e.preventDefault();
    trainName = $('#train-name-input').val().trim();
    // console.log(trainName);
    destination = $('#destination-input').val().trim();
    // console.log(destination);
    frequency = $('#frequency-input').val().trim();
    // console.log(frequency);
    firstTrainTime = $('#first-train-time-input').val().trim();
    // console.log(firstTrainTime);

    // clear input function

    $('#train-name-input').val('');
    $('#destination-input').val('');
    $('#frequency-input').val('');
    $('#first-train-time-input').val('');

    // Pushes the data to Firebase

    const pushObject = {
      Name: trainName,
      Destination: destination,
      frequency: frequency,
      firstTrainTime: firstTrainTime,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
    };
    database.ref().push(pushObject);
  });

  // Pulls data from Firebase and puts it into my fields

  database.ref().on('child_added', function(childSnapshot, prevChildKey) {
    const trainName = childSnapshot.val().Name;
    const destination = childSnapshot.val().Destination;
    const frequency = childSnapshot.val().frequency;
    const firstTrainTime = childSnapshot.val().firstTrainTime;

    $('#train-table > tbody').append(`<tr><td>${trainName}</td><td>${destination}</td><td>${
      frequency}</td><td>${nextArrival}</td><td>${minutesAway}</td></tr>`);
  });

  // Clock function to give me the time right now

  function startTime() {
    const today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    `Current time: ${h}:${m}:${s}`;
    const t = setTimeout(startTime, 500);
  }
  function checkTime(i) {
    if (i < 10) { i = `0${i}`; } // add zero in front of numbers < 10
    return i;
  }
  startTime();
});
// Possibly use this for the calculation of time they entered for train arrival
// to current time for Time till next train moment().fromNow();

// var breakfast = moment('8:32','HH:mm');
// var lunch = moment('12:52','HH:mm');
// console.log( moment.duration(lunch - breakfast).humanize() + ' between meals' ) // 4 hours between meals

// Creates the firstTrainTime

const timeDifference = moment().diff(moment.firstTrainTime, 'minutes');
console.log(timeDifference);
