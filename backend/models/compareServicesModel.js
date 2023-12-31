import { query } from '../config/db.js'
import asyncHandler from 'express-async-handler'


const getNoOfComparepackages = asyncHandler(
    async (
        event_id,
        service
    ) => {
        // console.log(event_id);
        const selectQuery = `SELECT * FROM compareservices WHERE event_id=$1 AND service=$2`
        const noOfCompares = await query(selectQuery, [event_id, service])

        return noOfCompares

    })


const insertPackageToCompare = asyncHandler(
    async (
        event_id,
        service,
        package_id,
        column_id

    ) => {
        try {
            // console.log(event_id);
            const insertPackageToComparequery = `INSERT INTO compareservices(event_id, service, package_id,column_id) VALUES ($1, $2, $3, $4)  RETURNING column_id`
            const column = await query(insertPackageToComparequery, [event_id, service, package_id, column_id])
            // console.log(column);
            return column
        } catch (error) {
            console.error(`Error checking contact number existence: ${error.message}`)
            throw new Error(`Internal Error`)
        }

    }
)

const getComparePack = asyncHandler(
    async (
        event_id,
        service,
        service1
)=>{
    try {
        const getpackageQuery = `SELECT * FROM compareservices INNER JOIN ${service}package ON compareservices.package_id=${service}package.package_id WHERE compareservices.event_id=$1 AND compareservices.service=$2 ORDER BY column_id ASC`
        const packages = await query(getpackageQuery,[event_id,service1])
        return packages.rows 
    } catch (error) {
        
    }

})

const getComparePackCount = asyncHandler(
    async (
        event_id,
        column_id,
        service
    ) => {
        try {
            const getpackageQuery = `SELECT * FROM compareservices WHERE event_id=$1 AND column_id=$2 AND service=$3`
            const packages = await query(getpackageQuery, [event_id, column_id, service])
            return packages.rowCount
        } catch (error) {

        }

    })

const updatePackageToCompare = asyncHandler(
    async(
        event_id,
        service,
        package_id,
        column_id

    )=>{
        try {
            console.log(column_id);
            console.log(event_id);
            const insertPackageToComparequery = `UPDATE compareservices SET package_id=$1 WHERE event_id=$2 AND column_id=$3 AND service=$4 RETURNING column_id`
            const column = await query(insertPackageToComparequery,[package_id,event_id,column_id,service])
            // console.log(column);
            return column
        } catch (error) {
            console.error(`Error checking contact number existence: ${error.message}`)
            throw new Error(`Internal Error`)
        }

    }
)


const getCompareCakes = asyncHandler(
    async(
        event_id
    )=>{
        try {
            const service='Cake'
            const getCakeQuery = `SELECT * FROM compareservices WHERE event_id=$1 AND service=$2`
            const compareCakes= await query(getCakeQuery,[event_id,service])
            return compareCakes.rows
            
        } catch (error) {
            console.error(`Error checking contact number existence: ${error.message}`)
            throw new Error(`Internal Error`)
        }
    }
)

const getCompareCatering = asyncHandler(
    async(
        event_id
    )=>{
        try {
            const service='Catering'
            const getCakeQuery = `SELECT * FROM compareservices WHERE event_id=$1 AND service=$2`
            const compareCakes= await query(getCakeQuery,[event_id,service])
            return compareCakes.rows
            
        } catch (error) {
            console.error(`Error checking contact number existence: ${error.message}`)
            throw new Error(`Internal Error`)
        }
    }
)

const getCompareDecos = asyncHandler(
    async(
        event_id
    )=>{
        try {
            const service='Decoration'
            const getCakeQuery = `SELECT * FROM compareservices WHERE event_id=$1 AND service=$2`
            const compareCakes= await query(getCakeQuery,[event_id,service])
            return compareCakes.rows
            
        } catch (error) {
            console.error(`Error checking contact number existence: ${error.message}`)
            throw new Error(`Internal Error`)
        }
    }
)

const getComparePhotography = asyncHandler(
    async(
        event_id
    )=>{
        try {
            const service='Photography'
            const getCakeQuery = `SELECT * FROM compareservices WHERE event_id=$1 AND service=$2`
            const compareCakes= await query(getCakeQuery,[event_id,service])
            return compareCakes.rows
            
        } catch (error) {
            console.error(`Error checking contact number existence: ${error.message}`)
            throw new Error(`Internal Error`)
        }
    }
)

const getCompareSound = asyncHandler(
    async(
        event_id
    )=>{
        try {
            const service='Photography'
            const getCakeQuery = `SELECT * FROM compareservices WHERE event_id=$1 AND service=$2`
            const compareCakes= await query(getCakeQuery,[event_id,service])
            return compareCakes.rows
            
        } catch (error) {
            console.error(`Error checking contact number existence: ${error.message}`)
            throw new Error(`Internal Error`)
        }
    }
)

const getVenue = asyncHandler(
    async(
        event_id
    )=>{
        try {
            const service='Venue'
            const getCakeQuery = `SELECT * FROM compareservices WHERE event_id=$1 AND service=$2`
            const compareCakes= await query(getCakeQuery,[event_id,service])
            return compareCakes.rows
            
        } catch (error) {
            console.error(`Error checking contact number existence: ${error.message}`)
            throw new Error(`Internal Error`)
        }
    }
)



export {getNoOfComparepackages,insertPackageToCompare,getComparePack,getComparePackCount,updatePackageToCompare,getCompareCakes,getCompareCatering,getCompareDecos,getComparePhotography, getCompareSound,getVenue}
