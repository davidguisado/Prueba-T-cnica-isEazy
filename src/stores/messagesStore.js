import { defineStore } from 'pinia';

export const messagesStore = defineStore('counter', {
    state: () => ({
        chat: [
            {
                isSender: true,
                isFile: true,
                title: 'VERSIÓN 1',
                titleFile: 'Titulo del archivo a subir 2.pdf',
                dateTime: '1546004700',
                infoFile: 'Documento / PDF (3.8MB)'
            },
            {
                isSender: true,
                isFile: false,
                content: 'Buenas tardes, acabo de subir el primer archivo con el primer caso práctico, espero revisión',
                dateTime: '1546004700',
                iconUser: 'https://www.un.org/sites/un2.un.org/files/2021/02/unwomen-5.png'
            },
            {
                isSender: false,
                isFile: false,
                content: '¡Gran Trabajo Silvia! Pero creo que deberías revisar el punto 3. Intenta añadir un poco más de contexto y un' +
                    'apartado final de conclusiones personales.',
                dateTime: '1546074660',
                iconUser: 'https://www.cdc.gov/preconception/spanish/images/man-with-arms-crossed.jpg'
            },
            {
                isSender: true,
                isFile: true,
                title: 'VERSIÓN 2',
                titleFile: 'Titulo del archivo a subir 2.pdf',
                dateTime: '1546154520',
                infoFile: 'Documento / PDF (4.8MB)'
            },
            {
                isSender: true,
                isFile: false,
                content: 'Realizados los cambios según feedback.',
                dateTime: '1546154520',
                iconUser: 'https://www.un.org/sites/un2.un.org/files/2021/02/unwomen-5.png'
            },
            {
                isSender: false,
                isFile: false,
                content: 'Perfecto, excelente trabajo.',
                dateTime: '1546179900',
                iconUser: 'https://www.cdc.gov/preconception/spanish/images/man-with-arms-crossed.jpg'
            },
        ]
    }),
    actions: {
        addNewMessage(messageObj) {
            this.chat.push(messageObj);
        }
    },
    getters: {
        getOrderedMessages (state) {
            return state.chat.sort((message1, message2) => parseFloat(message1.dateTime) - parseFloat(message2.dateTime));
        }
    },
});