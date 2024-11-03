import { MemoryRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import { useSettingsContext } from '../core/context';
import About from '../pages/about/About';
import DiagramSection from '../pages/diagram-section/DiagramSection';
import PanelSection from '../pages/panel-section/PanelSection';
import Toolbar from './toolbar/Toolbar';

/**
 * The main component for the settings page.
 *
 * This component renders a `MemoryRouter` and `Routes` component, which
 * manage the client-side routing of the settings page. The `Toolbar` is
 * rendered above the routes, and the `DiagramSection`, `PanelSection`, and
 * `About` components are rendered depending on the current route.
 *
 * The `MemoryRouter` is given the current path from the settings context as
 * its initial entry, and the reload count is used as the `key` prop to
 * force a re-render of the `MemoryRouter` when the settings are reloaded.
 *
 * @returns The main component for the settings page.
 */
const SettingsPage: React.FC = () => {
    const { reloadCount, currentPath } = useSettingsContext();
    return (
        <MemoryRouter initialEntries={[currentPath]} key={reloadCount}>
            <Toolbar />
            <Routes>
                <Route path="/diagram-section/*" element={<DiagramSection />} />
                <Route path="/panel-section/*" element={<PanelSection />} />
                <Route path={'/about'} element={<About />} />
            </Routes>
        </MemoryRouter>
    );
};
export default SettingsPage;
