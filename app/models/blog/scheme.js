var _ = require('lodash');

// Type for each LINK
var LINK = {id: 'string', metadata: 'object', label: 'string', url: 'string'};

// KEY           TYPE       WRITE   PUBLIC
var DECLARATION = {
  id:           ['string',  false,  false],
  owner:        ['string',  false,  false],
  folder:       ['string',  true,   true],
  handle:       ['string',  true,   true],
  title:        ['string',  true,   true],
  isDisabled:   ['boolean', true,   false],
  avatar:       ['string',  true,   true],
  roundAvatar:  ['boolean', true,   true],
  cssURL:       ['string',  false,  true],
  scriptURL:    ['string',  false,  true],
  template:     ['string',  true,   false],
  menu:         [[LINK],    true,   true],
  domain:       ['string',  true,   true],
  pageSize:     ['number',  true,   false],
  dateFormat:   ['string',  true,   true],
  dateDisplay:  ['string',  true,   true],
  timeZone:     ['string',  true,   true],
  hideDates:    ['boolean', true,   true],
  plugins:      ['object',  true,   true],
  cacheID:      ['number',  false,  true]
};


var MODEL = {TYPE: {}, PUBLIC: [], WRITEABLE: []};

for (var i in DECLARATION)
  MODEL.TYPE[i] = DECLARATION[i][0];

for (var i in DECLARATION)
  if (DECLARATION[i][1])
    MODEL.WRITEABLE.push(i);

for (var i in DECLARATION)
  if (DECLARATION[i][2])
    MODEL.PUBLIC.push(i);

module.exports = MODEL;