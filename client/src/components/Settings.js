import React from 'react';

function Settings() {

    return (

        <div class="container">

            <div class="row flex">

                <div class="col-12">
                    <h1>Enter the song you would like to wake up too</h1>
                    <br />
                    <input type="text" id="songName"></input>
                    <br />
                    <button type="button" class="block" id="SubmitSong"></button>
                </div>


            </div>

            <div class="row flex">

                <div class="col-12">

                    <div class="songDump">

                    </div>

                </div>

            </div>

            <div class="row flex" id="tracks">

            </div>


        </div>



    )

}



export default Settings;
