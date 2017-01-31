export default function reducer(
    state = {
        snippetData: {},
        snippetDetails: {},
        fetching: false,
        fetched: false,
        error: null,
        showSettingsModal: false,
        clearSettingsModal: false
    }, action
) {
    switch(action.type) {
        case "FETCH_SNIPPETS": {
            return {...state, fetching: true};
        }
        case "FETCH_SNIPPETS_REJECTED": {
            return {...state, fetching: false, error: action.payload};
        }
        case "FETCH_SNIPPETS_FULFILLED": {
            return {...state, fetching: false, fetched: true, snippetData: action.payload.snippetData};
        }
        case "FILTER_SNIPPETS": {
            return {...state, snippetData: action.payload.snippetData};
        }
        case "FETCH_SNIPPET_DETAILS_FULFILLED": {
            return {...state, snippetDetails: action.payload.snippetDetails};
        }
        case "TOGGLE_SETTINGS_MODAL": {
            return {...state, showSettingsModal: action.payload.showSettingsModal, clearSettingsModal: action.payload.clearSettingsModal}
        }
    }

    return state;
};