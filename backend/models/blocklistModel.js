import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler'


const getBlocklistOfOneUser = asyncHandler(
    async(
        user_id
    )=>{

        try {
            const status=0
            const getblocklistQuery = `SELECT * FROM blocklist WHERE my_id=$1 AND block_status=$2`
            const blockList= await query(getblocklistQuery,[user_id,status]);
            return blockList.rows
            
        } catch (error) {
            console.error(error);
            throw new Error(`Internal Error`)
        }
    }
)


export {getBlocklistOfOneUser}