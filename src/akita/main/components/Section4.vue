<template>
    <section class="section4">
        <div class="contain contain-fix">
            <h3 class="section4__title">The modular service design</h3>
            <div class="machines__information">
                <div class="machines__text machines__text-top">Machines modular services can be integrated into existing systems and hardware or by adding external pc units that can be as small and cheap as a Raspberry Pi</div>
                <div class="machines__text machines__text-left">Services and products made by your machine can be offered and sold directly M2M to other machines</div>
                <div class="machines__middle">
                    <div class="machines__block-mid">Machines</div>
                    <div class="machines__blocks-top machines__blocks">Integrate to your machine</div>
                    <div class="machines__blocks-lt machines__blocks">
                        <span class="aquamarine">Sell Service<br/>+100i</span>
                    </div>
                    <div class="machines__blocks-lb machines__blocks">
                        <span class="aquamarine">New Service<br/>+500i</span>
                    </div>
                    <div class="machines__blocks-rt machines__blocks">
                        <span class="pink">Buy Service<br/>-50i</span>
                        </div>
                    <div class="machines__blocks-rb machines__blocks">
                        <span class="pink">Alternative Service<br/>-200i</span>
                    </div>
                    <div class="machines__blocks-bot machines__blocks">Connect to <br/>the Tangle</div>                    
                </div>
                <div class="machines__text machines__text-right">Every machine needs at least power to work. In addition it can purchase information like building plans, GPS coordinates or sensor data.</div>
                <div class="machines__text machines__text-bottom">Machines is your gateway in and out of the DLT, it can generate private keys, securely store them and save valubale data on an immutable ledger</div>
            </div>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style>
    .section4 {
        margin-top: 200px;
        line-height: 1.2;
    }

    .section4__title {
        text-align: center;
        font-family: 'Oswald', sans-serif;
        font-weight: bold;
        font-size: 52px;
    }

    .machines__information {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        grid-template-rows: 70px 1fr 70px;
        grid-gap: 25px;
    }

    .machines__middle {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1r 1fr 1fr;
        grid-gap: 15px 10px;
    }

    .machines__text {
        padding: 0px 20px;
        font-size: 18px;
    }

    .machines__text-top {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    .machines__text-left {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        margin-top: 70px;
    }

    .machines__text-right {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
        margin-top: 70px;
    }

    .machines__text-bottom {
        grid-column: 2 / 3;
        grid-row: 3 / 4;
    }

    .machines__block-mid {
        background: linear-gradient(to top right, #5F46B1 0%, #FF2EA0 100%);
        color: #fff;
        border-radius: 10px;
        padding-top: 50px;
        max-width: 150px;
        width: 100%;
        height: 130px;
        font-size: 24px;
        margin: auto;
        text-align: center;
        grid-column: 2 / 3;
        grid-row: 2 / 4;
    }

    .machines__blocks {
        background-color: #F2F2F2;
        height: 40px;
        text-align: center;
        max-width: 150px;
        width: 100px;
        width: 100%;
        margin: auto;
        font-weight: bold;
        font-size: 14px;
    }

    .machines__blocks-top {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }

    .machines__blocks-lt {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
    }

    .machines__blocks-lb {
        grid-column: 1 / 2;
        grid-row: 3 / 4;
    }

    .machines__blocks-rt {
        grid-column: 3 / 4;
        grid-row: 2 / 3;
    }

    .machines__blocks-rb {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
    }

    .machines__blocks-bot {
        grid-column: 2 / 3;
        grid-row: 4 / 5;
    }

    .aquamarine {
        color: #0BC5FE;
    }

    .pink {
        color: #EC60AA;
    }

    @media (max-width: 1000px) {
        .contain-fix {
            padding: 0px;
        }

        .machines__text-bottom {
            grid-column: 2 / 3;
            grid-row: 4 / 5;
        }

        .machines__text-right {
            grid-column: 2 / 3;
            grid-row: 3 / 4;
            margin-top: 0;
        }

        .machines__text-left {
            grid-column: 2 / 3;
            grid-row: 5 / 6;
            margin-top: 0;
        }

        .machines__information {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr;
        }
    }

    @media (max-width: 400px) {
        .machines__block-mid {
            height: 100px;
            padding-top: 35px;
        }

        .machines__information {
            grid-template-rows: 120px 1fr 100px 100px 100px;
            grid-gap: 20px 5px;
        }

        .machines__blocks-rb {
            font-size: 12px;
        }
    }
</style>