'use strict';

function init() {

  var careportal = {
    name: 'careportal'
    , label: 'Care Portal'
    , pluginType: 'drawer'
  };

  // eslint-disable-next-line no-unused-vars
  careportal.getEventTypes = function getEventTypes (sbx) {

    //TODO: use sbx and new CAREPORTAL_EVENTTYPE_GROUPS="core temps combo dad sensor site etc"

    return [
        { val: 'Meal Bolus'
        , name: 'Carb entry'
        , bg: false,  insulin: false,  carbs: true,  prebolus: true,  duration: false, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Correction Bolus'
        , name: 'Bolus entry'
        , bg: false,  insulin: true,  carbs: false,  prebolus: false,  duration: false, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Note'
        , name: 'Note'
        , bg: true, insulin: false, carbs: false, protein: false, fat: false, prebolus: false, duration: true, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Exercise'
        , name: 'Exercise'
        , bg: false, insulin: false, carbs: false, protein: false, fat: false, prebolus: false, duration: true, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Site Change'
        , name: 'Pump Site Change'
        , bg: false,  insulin: true,  carbs: false, prebolus: false, duration: false, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Sensor Start'
        , name: 'CGM Sensor Start'
        , bg: false,  insulin: false, carbs: false, prebolus: false, duration: false, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Pump Battery Change'
        , name: 'Pump Battery Change'
        , bg: false,  insulin: false, carbs: false, prebolus: false, duration: false, percent: false, absolute: false, profile: false, split: false
        }
    ];

  };

  return careportal;
}

module.exports = init;
