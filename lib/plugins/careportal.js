'use strict';

function init() {

  var careportal = {
    name: 'careportal'
    , label: 'Care Portal'
    , pluginType: 'drawer'
  };

  careportal.getEventTypes = function getEventTypes (sbx) {

    //TODO: use sbx and new CAREPORTAL_EVENTTYPE_GROUPS="core temps combo dad sensor site etc"

    return [
      { val: 'Meal Bolus'
        , name: 'Meal Bolus'
        , bg: true,  insulin: true,  carbs: true,  prebolus: true,  duration: false, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Correction Bolus'
        , name: 'Correction Bolus'
        , bg: true,  insulin: true,  carbs: false, prebolus: false, duration: false, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Carb Correction'
        , name: 'Carb Correction'
        , bg: true,  insulin: false, carbs: true,  prebolus: false, duration: false, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Exercise'
        , name: 'Exercise'
        , bg: false, insulin: false, carbs: false, prebolus: false, duration: true,  percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Site Change'
        , name: 'Pump Site Change'
        , bg: true,  insulin: true,  carbs: false, prebolus: false, duration: false, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Sensor Start'
        , name: 'CGM Sensor Start'
        , bg: true,  insulin: false, carbs: false, prebolus: false, duration: false, percent: false, absolute: false, profile: false, split: false
      }
      , { val: 'Pump Battery Change'
        , name: 'Pump Battery Change'
        , bg: true,  insulin: false, carbs: false, prebolus: false, duration: false, percent: false, absolute: false, profile: false, split: false
        }
      , { val: 'Temp Basal Start'
        , name: 'Temp Basal Start'
        , bg: true,  insulin: false, carbs: false, prebolus: false, duration: true,  percent: true,  absolute: true,  profile: false, split: false
      }
      , { val: 'Temp Basal End'
        , name: 'Temp Basal End'
        , bg: true,  insulin: false, carbs: false, prebolus: false, duration: true, percent: false, absolute: false, profile: false, split: false
      }
    ];
 
  };

  return careportal;
}

module.exports = init;
