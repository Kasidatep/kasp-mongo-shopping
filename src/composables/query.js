import { query, collection, getDocs, sum, average, getAggregateFromServer, getCountFromServer, where, orderBy, and, or, limit } from 'firebase/firestore'
import db from '../firebase/init'

const productRef = collection(db, "assignment-products")
const customerRef = collection(db, "assignment-customers")
const orderRef = collection(db, "assignment-orders")

const queryResultList = async (qry) => {
    let result = []
    const querySnap = await getDocs(qry)
    querySnap.forEach(async (doc) => {
        let data = doc.data()
        data.id = doc.id
        result.push(data)
    })
    return result
}

const findAllProduct = async () => {
    const qry = query(productRef)
    return await queryResultList(qry)
}

const findProductsByPriceRange = async (min = 100, max = 200) => {
    const qry = query(productRef, where("price", ">=", min), where("price", "<=", max))
    return await queryResultList(qry)
}

const findCustomerByNotification = async (enableNotification = true) => {
    const qry = query(customerRef, where("notification", "==", enableNotification))
    return await queryResultList(qry)
}

const findShippedOrdeByTotalAmountGreater = async (greaterTotalAmount = 1000) => {
    const qry = query(orderRef, where("status", "==", "shipped"), where("totalAmount", ">=", 1000))
    return await queryResultList(qry)
}

const findOrdeByCustomerOrderByOrderDateDesc = async (customer) => {
    const qry = query(orderRef, where("customerUsername", "==", customer), orderBy("orderDate", "desc"))
    return await queryResultList(qry)
}

const findTopThreeProducAvalibleInStock = async () => {
    const qry = query(productRef, orderBy("stock", "desc"), limit(3))
    return await queryResultList(qry)
}

const MatchProductReview = async () => {
    const qry = query(productRef, and(where("id","==","BBNNw0k0Pny2ztYgNYzN"),
     where("reviews", "array-contains", {user: 'john_doe', comment: 'Great phone, very fast!'})));
    return (await getCountFromServer(qry)).data().count>0
}

const findProductCategoryInElectronicsOrAccessories = async () => {
    const qry = query(productRef, where("category", "in", ["Electronics","Accessories"]))
    return await queryResultList(qry)
}

const sumOfAllOrderAmountByCustomer = async (customer = "john_doe") => {
    const snap = await getAggregateFromServer(orderRef, {
        totalAmount: sum('totalAmount')
    })
    return snap.data().totalAmount
}

const avgAmountOfOrder = async () => {
    const snap = await getAggregateFromServer(orderRef, {
        avgAmount: average('totalAmount')
    })
    return snap.data().avgAmount
}

export {
    findAllProduct,
    findProductsByPriceRange,
    findCustomerByNotification,
    findShippedOrdeByTotalAmountGreater,
    findOrdeByCustomerOrderByOrderDateDesc,
    findTopThreeProducAvalibleInStock,
    MatchProductReview,
    findProductCategoryInElectronicsOrAccessories,
    sumOfAllOrderAmountByCustomer,
    avgAmountOfOrder
}