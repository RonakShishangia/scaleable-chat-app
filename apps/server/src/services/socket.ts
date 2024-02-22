import { Server } from "socket.io";

class SocketService {
    private _io: Server;

    constructor() {
        console.log(`Init Socket Service..`)
        this._io = new Server({
            cors: {
                allowedHeaders: ['*'],
                origin: "*",
            }
        });
    }

    /**
     * intiListeners
     */
    public intiListeners() {
        console.log(`In Socket Listeners...`);
        
        const io = this._io;
        io.on("connect", ( socket ) => {
            console.log(`New Socket Connected`, socket.id);
            socket.on("even:message", async ({message}: {message: string}) => {
                console.log(`New Message Rec. `, message);
                
            })
        })
    }

    get io() {
        return this._io;
    }
}

export default SocketService;