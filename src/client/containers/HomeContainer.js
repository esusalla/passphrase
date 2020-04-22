import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Home from '../components/Home';
import JoinFormContainer from './JoinFormContainer';
import CreateFormContainer from './CreateFormContainer';

function HomeContainer() {
    // Global state
    const audio = useSelector(state => state.audio);
    const audioTimeout = useSelector(state => state.audioTimeout);
    const connected = useSelector(state => state.connected);

    // Local state
    const [view, setView] = useState('');

    // Global state changes
    const dispatch = useDispatch();
    const handleRestartGame = () => dispatch(actions.restartGame());

    // Local state changes
    const handleViewChange = event => setView(event.target.value || '');

    useEffect(() => {
        // Stop audio if disconnected from server during active round
        if (audio) audio.pause();
        clearTimeout(audioTimeout);
    }, [connected]);

    if (view === 'join') return <JoinFormContainer handleViewChange={handleViewChange} />;
    if (view === 'create') return <CreateFormContainer handleViewChange={handleViewChange} />;
    return <Home handleViewChange={handleViewChange} />;

}

export default HomeContainer;