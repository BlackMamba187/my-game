import React, { useEffect, useState } from "react";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import "./App.css";
import Dashboard from "./Auth/Dashboard/Dashboard";
import MainGame from "./MainGame/MainGame";

const App = () => {
	return <MainGame />;
};

export default App;
