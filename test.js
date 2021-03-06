'use strict'

const tape = require('tape')
const ouibus = require('./index')

tape('ouibus.stations', (t) => {
	ouibus.stations().then((stations) => {
		t.plan(5)
		t.false(stations.length == 0, 'stations count')
		t.true(stations[0].type, 'station type')
		t.true(stations[0].id, 'station id')
		t.true(stations[0].name, 'station name')
		t.true(stations[0].destinations, 'station destinations')
	})
})

tape('ouibus.stations', (t) => {
	ouibus.journeys(90, 13, new Date(+new Date()+1000*60*60*24)).then((journeys) => {
		t.plan(14)
		t.true(journeys.length, 'journeys count')
		t.true(journeys[0].type, 'journey type')
		t.true(journeys[0].id, 'journey id')
		t.true(journeys[0].origin, 'journey origin')
		t.true(journeys[0].destination, 'journey destination')
		t.true(+journeys[0].departure, 'journey departure')
		t.true(+journeys[0].arrival, 'journey arrival')
		t.true(journeys[0].price.amount, 'journey price')
		t.true(journeys[0].legs.length, 'legs count')
		t.true(journeys[0].legs[0].origin, 'leg origin')
		t.true(journeys[0].legs[0].destination, 'leg destination')
		t.true(+journeys[0].legs[0].departure, 'leg departure')
		t.true(+journeys[0].legs[0].arrival, 'leg arrival')
		t.true(journeys[0].legs[0].busNumber, 'leg bus number')
	})
})