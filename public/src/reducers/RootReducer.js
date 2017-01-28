import {combineReducers} from 'redux'
import LocalWeatherReducer from './LocalWeatherReducer'
import PinLocation from './PinLocation'
import PinnedWeatherLocation from './PinnedWeatherLocation'

const RootReducer = combineReducers({
	LocalWeatherReducer,
	PinLocation,
	PinnedWeatherLocation
});

export default RootReducer;
