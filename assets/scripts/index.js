'use strict';

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


$(document).ready(function () {
  $('#add-train-btn').on('click', function(e) {
    e.preventDefault();
    trainName = $('#train-name-input').val().trim();
    console.log(trainName);
    destination = $('#destination-input').val().trim();
    console.log(destination);
    frequency = $('#frequency-input').val().trim();
    console.log(frequency);
    firstTrainTime = $('#first-train-time-input').val().trim();
    console.log(firstTrainTime);
    $('#train-name-input').val('');
    $('#destination-input').val('');
    $('#frequency-input').val('');
    $('#first-train-time-input').val('');

    const pushObject = {
      Name: trainName,
      Destination: destination,
      frequency: frequency,
      firstTrainTime: firstTrainTime,
      dateAdded: firebase.database.ServerValue.TIMESTAMP,
    };
    database.ref().push(pushObject);

    $('#employee-table > tbody').append(`<tr><td>${trainName}</td><td>${destination}</td><td>${
      frequency}</td><td>${nextArrival}</td><td>${minutesAway}</td></tr>`);
  });

  database.ref().on('child_added', function(snapshot) {
    const sv = snapshot.val();
    console.log(sv);
  });

// database.ref().orderByChild("dateAdded").limitToLast(1).on("child_added", function(snapshot) {

//     const sv= snapshot.val();

//     $()
// })
});
