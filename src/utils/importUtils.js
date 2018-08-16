//Page Imports
import Dispatch from '../pages/Dispatch';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Profile from '../pages/Profile';
import NewRequest from '../pages/NewRequest';
import ReportPage from '../pages/ReportPage';
import Settings from '../pages/Settings';
import Stores from '../pages/Stores';


//Component Imports
import AdminChart from '../components/AdminChart';
import AdminQuickTool from '../components/AdminQuickTool';
import AdminRequestReportModal from '../components/AdminRequestReportModal';
import AdminTrailerReportModal from '../components/AdminTrailerReportModal';
import DateOptions from '../components/DateOptions';
import Detail from '../components/Detail';
import DispatchChart from '../components/DispatchChart';
import DispatchQuickTool from '../components/DispatchQuickTool';
import Header from '../components/Header';
import History from '../components/History';
import InventoryTable from '../components/InventoryTable';
import LocationForm from '../components/LocationForm';
import MoreOptions from '../components/MoreOptions';
import NewDriverModal from '../components/NewDriverModal';
import NewLocationModal from '../components/NewLocationModal';
import NewTrailerModal from '../components/NewTrailerModal';
import NewStoreModal from '../components/NewStoreModal';
import NewUserModal from '../components/NewUserModal';
import PersonForm from '../components/PersonForm';
import RecordTable from '../components/RecordTable';
import ReportTable from '../components/ReportTable';
import RequestFeed from '../components/RequestFeed';
import RequestSubmit from '../components/RequestSubmit';
import StoreChart from '../components/StoreChart';
import StoreQuickTool from '../components/StoreQuickTool';
import TrailerForm from '../components/TrailerForm';
import TrailerOptions from '../components/TrailerOptions';
import TrailerSubmit from '../components/TrailerSubmit';


//Assets - Static 


//Assets - CSS
import ChartCSS from '../components/assets/Chart.css';
import HeaderCSS from '../components/assets/Header.css';


//Assets - FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

library.add(faDownload);


//Page Exports
export {default as Dispatch} from '../pages/Dispatch';
export {default as Home} from '../pages/Home';
export {default as Login} from '../pages/Login';
export {default as Profile} from '../pages/Profile';
export {default as NewRequest} from '../pages/NewRequest';
export {default as ReportPage} from '../pages/ReportPage';
export {default as Settings} from '../pages/Settings';
export {default as Stores} from '../pages/Stores';

//Component Imports
export {default as AdminChart} from '../components/AdminChart';
export {default as AdminQuickTool} from '../components/AdminQuickTool';
export {default as AdminRequestReportModal} from '../components/AdminRequestReportModal';
export {default as AdminTrailerReportModal} from '../components/AdminTrailerReportModal';
export {default as DateOptions} from '../components/DateOptions';
export {default as Detail} from '../components/Detail';
export {default as DispatchChart} from '../components/DispatchChart';
export {default as DispatchQuickTool} from '../components/DispatchQuickTool';
export {default as Header} from '../components/Header';
export {default as History} from '../components/History';
export {default as InventoryTable} from '../components/InventoryTable';
export {default as LocationForm} from '../components/LocationForm';
export {default as MoreOptions} from '../components/MoreOptions';
export {default as NewDriverModal} from '../components/NewDriverModal';
export {default as NewLocationModal} from '../components/NewLocationModal';
export {default as NewTrailerModal} from '../components/NewTrailerModal';
export {default as NewStoreModal} from '../components/NewStoreModal';
export {default as NewUserModal} from '../components/NewUserModal';
export {default as PersonForm} from '../components/PersonForm';
export {default as RecordTable} from '../components/RecordTable';
export {default as ReportTable} from '../components/ReportTable';
export {default as RequestFeed} from '../components/RequestFeed';
export {default as RequestSubmit} from '../components/RequestSubmit';
export {default as StoreChart} from '../components/StoreChart';
export {default as StoreQuickTool} from '../components/StoreQuickTool';
export {default as TrailerForm} from '../components/TrailerForm';
export {default as TrailerOptions} from '../components/TrailerOptions';
export {default as TrailerSubmit} from '../components/TrailerSubmit';

//Assets - CSS
export {default as ChartCSS} from '../components/assets/Chart.css';
export {default as HeaderCSS} from '../components/assets/Header.css';