import {combineReducers} from 'redux';
import {appData} from './appData';
import {appState} from './appState';

const NameSpace = {
  DATA: 'DATA',
  STATE: 'STATE',
};

export default combineReducers({
  [NameSpace.DATA]: appData,
  [NameSpace.STATE]: appState,
});
