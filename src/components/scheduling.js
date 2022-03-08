const createPriorityQueue = () => {
    return [];
}

const enqueue = (pqueue, name, petSize, startTime) => {
    let exists = false;

    const endTime = startTime + petSize;

    for (let i = 0; i < pqueue.length; i++) {
        if (pqueue[i].endTime > endTime) {
            pqueue.splice(i, 0, { name, petSize, startTime, endTime })
            exists = true;
            break;
        }
    }

    if (!exists) pqueue.push({ name, petSize, startTime, endTime })
    return pqueue;
}

const dequeue = (pqueue) => {
    if (!pqueue.length) return 'throw "Is Empty!"'

    return pqueue.shift()
}

const scheduling = (queue) => {
    const scheduling = [{ name: '', startTime: 0, endTime: 0 }];
    let last = 0;

    while (queue.length) {
        const date = dequeue(queue);

        if (date.startTime >= scheduling[last].endTime) {
            scheduling.push(date)
            last += 1;
        }
    }

    scheduling.shift();

    return scheduling;
}

export default {
    createPriorityQueue,
    enqueue,
    dequeue,
    scheduling,
}


// TEST

// const queue = createPriorityQueue();
// 
// // SIZES
// // P = 1, M = 2, G = 3
// 
// // id, petSize, startTime
// enqueue(queue, 'nome 1', 1, 10);
// enqueue(queue, 'nome 2', 2, 10);
// enqueue(queue, 'nome 3', 3, 14);
// enqueue(queue, 'nome 4', 2, 12);
// enqueue(queue, 'nome 5', 1, 16);
// 
// console.log(queue)
// 
// const s = scheduling(queue);
// console.log(s)