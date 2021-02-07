fetch(
                    "https://sheet.best/api/sheets/d3abdb1d-1bdc-48e3-9096-ea050256b49a/Datum/*12.12.2020 13:00 Uhr*",
                    {
                        method: "PATCH",
                        mode: "cors",
                        headers: {
                        "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                        Datum: "12.12.2020 13:00 Uhr",
                        Anzahl: 2,
                        }),
                    }
                    )
                    .then((r) => r.json())
                    .then(console.log)
                    .catch(console.error);
