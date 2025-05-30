export interface DiagramData {
    name: string;
    selector: string;
    on: boolean;
    panels: {
        [key: string]: {
            on: boolean;
        };
    };
}

export interface PanelPosition {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
}

export interface PanelConfig {
    enabled: boolean;
    position: PanelPosition;
}

export interface PanelsConfig {
    service: PanelConfig;
    move: PanelConfig;
    zoom: PanelConfig;
}

export interface DefaultSettings {
    supported_diagrams: DiagramData[];
    panelsConfig: PanelsConfig;
    diagramsPerPage: number;
    foldByDefault: boolean;
    preserveDiagramOriginalSize: boolean;
    automaticFoldingOnFocusChange: boolean;
    hideOnMouseOutDiagram: boolean;
    diagramExpandedHeight: number;
    diagramExpandedWidth: number;
    diagramFoldedHeight: number;
    diagramFoldedWidth: number;
    addHidingButton: boolean;
}
