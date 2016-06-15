import Immutable from 'immutable';

export const AppRecord = new Immutable.Record({
  executionState: 'not connected',
  github: null,
  channels: null,
  spawn: null,
  connectionFile: null,
  notificationSystem: null,
  kernelSpecName: null,
  isSaving: false,
});

export const DocumentRecord = new Immutable.Record({
  notebook: null,
  cellPagers: new Immutable.Map(),
  cellStatuses: new Immutable.Map(),
  stickyCells: new Immutable.Map(),
  focusedCell: null,
  cellMsgAssociations: new Immutable.Map(),
  msgCellAssociations: new Immutable.Map(),
});

export const DocumentMetadataRecord = new Immutable.Record({
  metadata: new Immutable.Map({
    past: new Immutable.List(),
    future: new Immutable.List(),
    filename: '',
  }),
  document: new DocumentRecord(),
});
