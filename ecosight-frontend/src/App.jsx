import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import LoginComponent from './components/LoginComponent'
import RegisterComponent from './components/RegisterComponent'
import SubmitSightingComponent from './components/SubmitSightingComponent'
import MainPageComponent from './components/MainPageComponent'
import ContributorSightingListComponent from './components/ContributorSightingListComponent'
import ResearcherSightingListComponent from './components/ResearcherSightingListComponent'
import AdminUserListComponent from './components/AdminUserListComponent'
import ViewSightingComponent from './components/ViewSightingComponent'
import ViewUserComponent from './components/ViewUserComponent'
import HeaderComponent from './components/HeaderComponent'

function App() {


  return (
    <>

    <HeaderComponent />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPageComponent />}></Route>
            <Route path='/sign-in' element={<LoginComponent />}></Route>
            <Route path='/register' element={<RegisterComponent />}></Route>
            <Route path='/c-home' element={<ContributorSightingListComponent />}></Route>
            <Route path='/r-home' element={<ResearcherSightingListComponent />}></Route>
            <Route path='/a-home' element={<AdminUserListComponent />}></Route>
            <Route path='/view-sighting' element={<ViewSightingComponent />}></Route>
            <Route path='/submit-sighting' element={<SubmitSightingComponent />}></Route>
            <Route path='/view-user' element={<ViewUserComponent />}></Route>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
