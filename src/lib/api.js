import mergeDeep from "@bit/ramda.ramda.merge-deep-with";

export default async function fetchJSON(url, options = {}) {
    options = mergeDeep(options, {
        // credentials: 'same-origin',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(options.body),
    })

    let resp = await fetch(url, options)

    if ((resp.headers.get("Content-Type") || "").includes("application/json")) {
        try {
            return {
                body: await resp.json(),
                status: resp.status,
            }
        } catch (err) {
            // Bad JSON
            throw new Error(`Status: ${resp.status}, API: Invalid JSON`)
        }
    } else {
        // Bad Content-type
        throw new Error(`Status: ${resp.status}, API: Invalid mime-type`)
    }
}
