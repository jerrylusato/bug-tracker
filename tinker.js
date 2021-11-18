try {
    throw new Error("Something went wrong");
} catch(err) {
    // console.log(err.message);
    console.log(err.stack);
}


