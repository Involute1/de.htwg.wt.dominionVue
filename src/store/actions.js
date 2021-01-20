let websocket;
let controller = {};

export default {
    connectWebsocket({dispatch, commit}) {
        websocket = new WebSocket("ws://localhost:9000/websocket");
        console.info('websocket connecting...');

        websocket.onopen = () => {
            console.info('Connected to Websocket');
            websocket.send(JSON.stringify({"client":"client"}));
        }

        websocket.onmessage = message => dispatch('websocketOnMessage', message);

        websocket.onerror = function (error) {
            console.log('Error in Websocket Occured: ' + error);
        };

        websocket.onclose = () => {
            setTimeout(() => {
                dispatch('connectWebsocket');
                setTimeout( {},500);
            }, 2000);
        }
        commit('connectToSocket', websocket)

    },

    websocketOnMessage({commit}, message) {
        controller = JSON.parse(message.data);
        if ("client_id" in controller) {
            commit('setClientId', controller.client_id);
            console.info('Websocket got id: ' + controller.client_id);
        } else {
            commit('setHtml', controller.html);
            commit('setPlayerActions', controller.playerActions);
            commit('setPlayerBuys', controller.playerBuys);
            commit('setPlayerMoney', controller.playerMoney);
            commit('setControllerPhase', controller.controllerPhase);
            commit('setTurn', controller.turn);
            commit('setPlayerName', controller.playerName);
            commit('setPlayerHand', controller.playerHand);
            commit('setPlayingDecks', controller.playingDecks);
            commit('setPlayerTurn', controller.playerTurn);
        }
    },

    request({commit}, command) {
        commit('request', command);
    }
}