export default {
    request(state, command) {
        console.info('Sending: ' + command);
        state.websocket.send(command);
    },

    connectToSocket(state, socket) {
        state.websocket = socket;
    },

    setClientId(state, clientId) {
        state.client_id = clientId;
    },

    setHtml(state, html) {
        state.html = html;
    },

    setPlayerActions(state, playerActions) {
        state.playerActions = playerActions;
    },

    setPlayerBuys(state, playerBuys) {
        state.playerBuys = playerBuys;
    },

    setPlayerMoney(state, playerMoney) {
        state.playerMoney = playerMoney;
    },

    setControllerPhase(state, controllerPhase) {
        state.controllerPhase = controllerPhase;
    },

    setTurn(state, turn) {
        state.turn = turn;
    },

    setPlayerName(state, playerName) {
        state.playerName = playerName;
    },

    setPlayerHand(state, playerHand) {
        state.playerHand = playerHand;
    },

    setPlayingDecks(state, playingDecks) {
        state.playingDecks = playingDecks;
    },
    setPlayerTurn(state, playerTurn) {
        state.playerTurn = playerTurn;
    }
}