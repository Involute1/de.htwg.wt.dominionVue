export default {
    getWebsocket(state) {
        return state.websocket
    },
    getClientId(state) {
        return state.client_id
    },
    getHtml(state) {
        return state.html
    },
    getPlayerActions(state) {
        return state.playerActions
    },
    getPlayerBuys(state) {
        return state.playerBuys
    },
    getPlayerMoney(state) {
        return state.playerMoney
    },
    getControllerPhase(state) {
        return state.controllerPhase
    },
    getTurn(state) {
        return state.turn
    },
    getPlayerName(state) {
        return state.playerName
    },
    getPlayerHand(state) {
        return state.playerHand
    },
    getPlayingDecks(state) {
        return state.playingDecks
    },
    getPlayerTurn(state) {
        return state.playerTurn
    }
}