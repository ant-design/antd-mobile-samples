import Dexie from 'dexie'
import { CLIENT_INDEXEDDB_NAME } from '../config/config'

class DbHelper {
    dbName = CLIENT_INDEXEDDB_NAME
    version = 1
    db = null
    constructor() {
        this.initDB(this.dbName)
    }
    openDB(dbName) {
        return new Promise((resolve, reject) => {
            let request = window.indexedDB.open(dbName);
            request.onerror = (e) => {
                console.log("Open IndexedDB Error!" + e.target.errorCode);
                reject('Open IndexedDB Error!' + e);
            };
            request.onsuccess = (e) => {
                resolve(e.target.result)
            };
            request.onupgradeneeded = (e) => {
                console.log(e);
                this.db = e.target.result
                reject('DB version changed to ' + e);
            };
        })
    }

    createDB(dbName) {
        var openRequest = window.indexedDB.open(dbName);
        openRequest.onerror = function (e) {
            console.log("Database error: " + e.target.errorCode);
        };
        openRequest.onsuccess = function (event) {
            console.log("Database created");
            localDatabase.db = openRequest.result;
        };
        openRequest.onupgradeneeded = function (evt) {
        };
    }

    deleteDB(dbName) {
        return new Promise((resolve, reject) => {
            var deleteDbRequest = window.indexedDB.deleteDatabase(dbName);
            deleteDbRequest.onsuccess = function (event) {
                console.log("database deleted successfully" + event);
                resolve()
            };
            deleteDbRequest.onerror = function (e) {
                console.log("Database error: " + e.target.errorCode);
                reject(e)
            };
        })
    }

    initDB(dbName) {
        this.db = new Dexie(dbName);
        this.db.version(this.version).stores({ attendanceRecords: "++id,timestamp,year,month,day,hour,minute,second" });
        this.db.open().catch(function (e) {
            console.error("Open failed: " + e);
        });
    }
}
export default new DbHelper()