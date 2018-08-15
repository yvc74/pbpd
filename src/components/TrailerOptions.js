import React from 'react';
import { Row, Col, FormGroup, Input, Label, CustomInput } from 'reactstrap';

export default class TrailerOptions extends React.Component {
    constructor (props, context) {
        super(props, context)

        this.state = {          
            currentStatus: '',
            hasLogo: '',
            owned: '',
            liftGate: '',
            rollDoor: '',
            trailerLength: '',
            lotLocation: '',
            trailerUnitNum: '',
            contentType: ''
        };

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);

      }

      render() {
        return (
            <div>
                <Row>
                    <Col className="col-3">
                        <FormGroup>
                            <legend for="statusCheckbox">Status</legend>
                            <div>
                                <CustomInput type="checkbox" id="returned" label="Returned" />
                                <CustomInput type="checkbox" id="onLocation" label="On Location" />
                                <CustomInput type="checkbox" id="maintenance" label="Maintenance"/>
                                <CustomInput type="checkbox" id="unknownStatus" label="Unknown"/>
                            </div>
                        </FormGroup>     
                    </Col>
                    <Col className="col-3">
                        <FormGroup>
                            <legend for="aboutCheckbox">About</legend>
                            <div>
                                <CustomInput type="checkbox" id="hasLogo" label="Has Logo Decal" />
                                <CustomInput type="checkbox" id="isOwned" label="Owned" />
                                <CustomInput type="checkbox" id="isLeased" label="Leased"/>
                            </div>
                        </FormGroup>  
                    </Col>
                    <Col className="col-3">
                        <FormGroup>
                            <legend for="doorTypeCheckbox">Door Type</legend>
                            <div>
                                <CustomInput type="checkbox" id="hasLiftGate" label="Has Lift Gate" />
                                <CustomInput type="checkbox" id="rollDoor" label="Roll Door" />
                                <CustomInput type="checkbox" id="swingDoor" label="Swing Door"/>
                            </div>
                        </FormGroup> 
                    </Col>
                    <Col className="col-3">
                        <FormGroup controlId="formControlsSelectMultiple">
                            <legend>Bed Length</legend>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                <option value="select">28</option>
                                <option value="select">32</option>
                                <option value="select">45</option>
                                <option value="select">48</option>
                                <option value="select">53</option>
                            </Input>
                        </FormGroup>    
                    </Col>
                </Row>
                <Row>
                    <Col className="col-3">
                        <FormGroup controlId="formControlsSelectMultiple">
                            <legend>Lot Location</legend>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                <option value="select">1</option>
                                <option value="select">2</option>
                                <option value="select">3</option>
                                <option value="select">8</option>
                                <option value="select">10</option>
                                <option value="select">11</option>
                                <option value="select">12</option>
                                <option value="select">13</option>
                                <option value="select">14</option>
                                <option value="select">15</option>
                                <option value="select">16</option>
                                <option value="select">17</option>
                                <option value="select">18</option>
                                <option value="select">19</option>
                                <option value="select">20</option>
                                <option value="select">21</option>
                                <option value="select">22</option>
                                <option value="select">23</option>
                                <option value="select">24</option>
                                <option value="select">25</option>
                                <option value="select">26</option>
                                <option value="select">27</option>
                                <option value="select">28</option>
                                <option value="select">29</option>
                                <option value="select">30</option>
                                <option value="select">31</option>
                                <option value="select">32</option>
                                <option value="select">34</option>
                                <option value="select">35</option>
                                <option value="select">36</option>
                                <option value="select">37</option>
                                <option value="select">38</option>
                                <option value="select">39</option>
                                <option value="select">40</option>
                                <option value="select">41</option>
                                <option value="select">42</option>
                                <option value="select">43</option>
                                <option value="select">44</option>
                                <option value="select">45</option>
                                <option value="select">46</option>
                                <option value="select">47</option>
                                <option value="select">48</option>
                                <option value="select">49</option>
                                <option value="select">50</option>
                                <option value="select">51</option>
                                <option value="select">52</option>
                                <option value="select">53</option>
                                <option value="select">55</option>
                                <option value="select">56</option>
                                <option value="select">810</option>
                                <option value="select">820</option>
                                <option value="select">830</option>
                                <option value="select">831</option>
                                <option value="select">832</option>
                                <option value="select">834</option>
                                <option value="select">835</option>
                                <option value="select">855</option>
                                <option value="select">996</option>
                                <option value="select">997</option>
                                <option value="select">998</option>
                                <option value="select">1502</option>
                                <option value="select">1504</option>
                                <option value="select">1508</option>
                                <option value="select">1519</option>
                                <option value="select">1520</option>
                                <option value="select">1523</option>
                                <option value="select">1527</option>
                                <option value="select">1519</option>
                                <option value="select">1528</option>
                                <option value="select">1545</option>
                                <option value="select">1546</option>
                                <option value="select">1550</option>
                                <option value="select">2503</option>
                                <option value="select">2507</option>
                                <option value="select">2513</option>
                                <option value="select">2514</option>
                                <option value="select">2516</option>
                                <option value="select">2524</option>
                                <option value="select">2536</option>
                                <option value="select">2549</option>
                                <option value="select">2551</option>
                                <option value="select">2556</option>
                                <option value="select">4500</option>
                                <option value="select">4509</option>
                                <option value="select">4510</option>
                                <option value="select">4537</option>
                                <option value="select">4540</option>
                                <option value="select">4552</option>
                                <option value="select">4564</option>
                                <option value="select">5501</option>
                                <option value="select">5505</option>
                                <option value="select">5522</option>
                                <option value="select">5547</option>
                                <option value="select">5548</option>
                                <option value="select">5559</option>
                                <option value="select">5560</option>
                                <option value="select">5562</option>
                                <option value="select">6505</option>
                                <option value="select">6539</option>
                                <option value="select">6540</option>
                                <option value="select">6541</option>
                                <option value="select">6543</option>
                            </Input>
                        </FormGroup>    
                    </Col> 
                    <Col className="col-6">
                        <FormGroup controlId="formControlsSelectMultiple">
                            <legend>Trailer Content Type</legend>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                <option value="select">ADC in Process</option>
                                <option value="select">Stored ADC Donations</option>
                                <option value="select">Stored Comm Donations</option>
                                <option value="select">Overflow Product Trailer</option>
                                <option value="select">Equipment/Bins/Gayords/Pallets</option>
                                <option value="select">Empty - (Non committed)</option>
                                <option value="select">Empty - Committed</option>
                                <option value="select">Stored Salvage</option>
                                <option value="select">Misc./Electronic/Recycle/Lost Donation</option>
                                <option value="select">LPT Trailers</option>
                                <option value="select">SSS Trailer/Loading Salvage</option>
                                <option value="select">ADC-Allocated-W/E/BIN</option>
                                <option value="select">Downloading/Loading</option>
                                <option value="select">Service Run Trailer - Retail Storage Trailer</option>
                                <option value="select">Grounded Trailers</option>
                                <option value="select">Not in service - Needing repairs</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col className="col-3">
                        <FormGroup controlId="formControlsSelectMultiple">
                            <legend>Unit Number</legend>
                            <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
                                <option value="select">CS-#3</option>
                                <option value="select">CS-#4</option>
                                <option value="select">CS-#5</option>
                                <option value="select">CS-#6 Silver</option>
                                <option value="select">CS-#7</option>
                                <option value="select">CS #12</option>
                                <option value="select">G001</option>
                                <option value="select">G002</option>
                                <option value="select">G003</option>
                                <option value="select">G004</option>
                                <option value="select">G005</option>
                                <option value="select">G006</option>
                                <option value="select">G007</option>
                                <option value="select">G008</option>
                                <option value="select">G009</option>
                                <option value="select">G014</option>
                                <option value="select">G018</option>
                                <option value="select">G019</option>
                                <option value="select">G020</option>
                                <option value="select">G021</option>
                                <option value="select">G022</option>
                                <option value="select">G023</option>
                                <option value="select">G024</option>
                                <option value="select">G025</option>
                                <option value="select">G026</option>
                                <option value="select">G027</option>
                                <option value="select">G028</option>
                                <option value="select">G029</option>
                                <option value="select">G030</option>
                                <option value="select">G031</option>
                                <option value="select">G032</option>
                                <option value="select">G033</option>
                                <option value="select">G034</option>
                                <option value="select">G035</option>
                                <option value="select">G036</option>
                                <option value="select">G038</option>
                                <option value="select">G039</option>
                                <option value="select">G040</option>
                                <option value="select">G041</option>
                                <option value="select">G042</option>
                                <option value="select">G043</option>
                                <option value="select">G044</option>
                                <option value="select">G045</option>
                                <option value="select">G046</option>
                                <option value="select">G047</option>
                                <option value="select">G048</option>
                                <option value="select">G049</option>
                                <option value="select">G050</option>
                                <option value="select">G051</option>
                                <option value="select">G052</option>
                                <option value="select">G053</option>
                                <option value="select">G054</option>
                                <option value="select">G055</option>
                                <option value="select">G056</option>
                                <option value="select">G057</option>
                                <option value="select">G058</option>
                                <option value="select">G059</option>
                                <option value="select">G060</option>
                                <option value="select">G061</option>
                                <option value="select">G062</option>
                                <option value="select">G063</option>
                                <option value="select">G064</option>
                                <option value="select">G065</option>
                                <option value="select">G066</option>
                                <option value="select">G067</option>
                                <option value="select">G068</option>
                                <option value="select">G069</option>
                                <option value="select">G070</option>
                                <option value="select">G071</option>
                                <option value="select">G072</option>
                                <option value="select">G073</option>
                                <option value="select">G075</option>
                                <option value="select">G076</option>
                                <option value="select">G077</option>
                                <option value="select">G078</option>
                                <option value="select">G079</option>
                                <option value="select">G080</option>
                                <option value="select">G081</option>
                                <option value="select">G082</option>
                                <option value="select">G083</option>
                                <option value="select">G084</option>
                                <option value="select">G085</option>
                                <option value="select">G086</option>
                                <option value="select">G087</option>
                                <option value="select">G088</option>
                                <option value="select">G089</option>
                                <option value="select">G090</option>
                                <option value="select">G091</option>
                                <option value="select">G092</option>
                                <option value="select">G093</option>
                                <option value="select">G094</option>
                                <option value="select">G095</option>
                                <option value="select">G096</option>
                                <option value="select">G097</option>
                                <option value="select">G098</option>
                                <option value="select">G099</option>
                                <option value="select">G100</option>
                                <option value="select">G1000</option>
                                <option value="select">G101</option>
                                <option value="select">G102</option>
                                <option value="select">G103</option>
                                <option value="select">G104</option>
                                <option value="select">G105</option>
                                <option value="select">G106</option>
                                <option value="select">G107</option>
                                <option value="select">G108</option>
                                <option value="select">G109</option>
                                <option value="select">G110</option>
                                <option value="select">G111</option>
                                <option value="select">G112</option>
                                <option value="select">G113</option>
                                <option value="select">G114</option>
                                <option value="select">G115</option>
                                <option value="select">G116</option>
                                <option value="select">G117</option>
                                <option value="select">G118</option>
                                <option value="select">G119</option>
                                <option value="select">G120</option>
                                <option value="select">G121</option>
                                <option value="select">G122</option>
                                <option value="select">G123</option>
                                <option value="select">G124</option>
                                <option value="select">G125</option>
                                <option value="select">G126</option>
                                <option value="select">G127</option>
                                <option value="select">G128</option>
                                <option value="select">G129</option>
                                <option value="select">G130</option>
                                <option value="select">G131</option>
                                <option value="select">G132</option>
                                <option value="select">G134</option>
                                <option value="select">G135</option>
                                <option value="select">G136</option>
                                <option value="select">G137</option>
                                <option value="select">G138</option>
                                <option value="select">G139</option>
                                <option value="select">G140</option>
                                <option value="select">G141</option>
                                <option value="select">G142</option>
                                <option value="select">G143</option>
                                <option value="select">G144</option>
                                <option value="select">G145</option>
                                <option value="select">G146</option>
                                <option value="select">G147</option>
                                <option value="select">G148</option>
                                <option value="select">G149</option>
                                <option value="select">G150</option>
                                <option value="select">G151</option>
                                <option value="select">G152</option>
                                <option value="select">G153</option>
                                <option value="select">G154</option>
                                <option value="select">G155</option>
                                <option value="select">G156</option>
                                <option value="select">G157</option>
                                <option value="select">G158</option>
                                <option value="select">G159</option>
                                <option value="select">G160</option>
                                <option value="select">G161</option>
                                <option value="select">G162</option>
                                <option value="select">G163</option>
                                <option value="select">G164</option>
                                <option value="select">G165</option>
                                <option value="select">G166</option>
                                <option value="select">G167</option>
                                <option value="select">G168</option>
                                <option value="select">G169</option>
                                <option value="select">G170</option>
                                <option value="select">G171</option>
                                <option value="select">G172</option>
                                <option value="select">G173</option>
                                <option value="select">G174</option>
                                <option value="select">G175</option>
                                <option value="select">G176</option>
                                <option value="select">G177</option>
                                <option value="select">G178</option>
                                <option value="select">G179</option>
                                <option value="select">G180</option>
                                <option value="select">G181</option>
                                <option value="select">G182</option>
                                <option value="select">G183</option>
                                <option value="select">G184</option>
                                <option value="select">G185</option>
                                <option value="select">G186</option>
                                <option value="select">G187</option>
                                <option value="select">G188</option>
                                <option value="select">G189</option>
                                <option value="select">G190</option>
                                <option value="select">G191</option>
                                <option value="select">G192</option>
                                <option value="select">G193</option>
                                <option value="select">G194</option>
                                <option value="select">G195</option>
                                <option value="select">G196</option>
                                <option value="select">G197</option>
                                <option value="select">G198</option>
                                <option value="select">G199</option>
                                <option value="select">G200</option>
                                <option value="select">G201</option>
                                <option value="select">G202</option>
                                <option value="select">G203</option>
                                <option value="select">G204</option>
                                <option value="select">G205</option>
                                <option value="select">G206</option>
                                <option value="select">G207</option>
                                <option value="select">G208</option>
                                <option value="select">G209</option>
                                <option value="select">G210</option>
                                <option value="select">G211</option>
                                <option value="select">G212</option>
                                <option value="select">G213</option>
                                <option value="select">G214</option>
                                <option value="select">G215</option>
                                <option value="select">G216</option>
                                <option value="select">G217</option>
                                <option value="select">G218</option>
                                <option value="select">G219</option>
                                <option value="select">G220</option>
                                <option value="select">G221</option>
                                <option value="select">G222</option>
                                <option value="select">G223</option>
                                <option value="select">G224</option>
                                <option value="select">G225</option>
                                <option value="select">G226</option>
                                <option value="select">G227</option>
                                <option value="select">G228</option>
                                <option value="select">G229</option>
                                <option value="select">G230</option>
                                <option value="select">G231</option>
                                <option value="select">G232</option>
                                <option value="select">G233</option>
                                <option value="select">G234</option>
                                <option value="select">G235</option>
                                <option value="select">G236</option>
                                <option value="select">G237</option>
                                <option value="select">G238</option>
                                <option value="select">G239</option>
                                <option value="select">G240</option>
                                <option value="select">G241</option>
                                <option value="select">G242</option>
                                <option value="select">G243</option>
                                <option value="select">G244</option>
                                <option value="select">G245</option>
                                <option value="select">G246</option>
                                <option value="select">G247</option>
                                <option value="select">G248</option>
                                <option value="select">G249</option>
                                <option value="select">G250</option>
                                <option value="select">G251</option>
                                <option value="select">G252</option>
                                <option value="select">G253</option>
                                <option value="select">G254</option>
                                <option value="select">G255</option>
                                <option value="select">G256</option>
                                <option value="select">G257</option>
                                <option value="select">G258</option>
                                <option value="select">G259</option>
                                <option value="select">G260</option>
                                <option value="select">G261</option>
                                <option value="select">G262</option>
                                <option value="select">G263</option>
                                <option value="select">G264</option>
                                <option value="select">G265</option>
                                <option value="select">G266</option>
                                <option value="select">G267</option>
                                <option value="select">G268</option>
                                <option value="select">G269</option>
                                <option value="select">G270</option>
                                <option value="select">G271</option>
                                <option value="select">G272</option>
                                <option value="select">G273</option>
                                <option value="select">G274</option>
                                <option value="select">G275</option>
                                <option value="select">G276</option>
                                <option value="select">G277</option>
                                <option value="select">G278</option>
                                <option value="select">G279</option>
                                <option value="select">G280</option>
                                <option value="select">G281</option>
                                <option value="select">G282</option>
                                <option value="select">G283</option>
                                <option value="select">G284</option>
                                <option value="select">G285</option>
                                <option value="select">G286</option>
                                <option value="select">G287</option>
                                <option value="select">G288</option>
                                <option value="select">G289</option>
                                <option value="select">G290</option>
                                <option value="select">G291</option>
                                <option value="select">G292</option>
                                <option value="select">G293</option>
                                <option value="select">G294</option>
                                <option value="select">G295</option>
                                <option value="select">G296</option>
                                <option value="select">G297</option>
                                <option value="select">G298</option>
                                <option value="select">G299</option>
                                <option value="select">G300</option>
                                <option value="select">G301</option>
                                <option value="select">G302</option>
                                <option value="select">G304</option>
                                <option value="select">G305</option>
                                <option value="select">G306</option>
                                <option value="select">G307</option>
                                <option value="select">G308</option>
                                <option value="select">G309</option>
                                <option value="select">G310</option>
                                <option value="select">G311</option>
                                <option value="select">G312</option>
                                <option value="select">G313</option>
                                <option value="select">G314</option>
                                <option value="select">G315</option>
                                <option value="select">G316</option>
                                <option value="select">G317</option>
                                <option value="select">G318</option>
                                <option value="select">G319</option>
                                <option value="select">G320</option>
                                <option value="select">G321</option>
                                <option value="select">G322</option>
                                <option value="select">G323</option>
                                <option value="select">G324</option>
                                <option value="select">G325</option>
                                <option value="select">G326</option>
                                <option value="select">G327</option>
                                <option value="select">G328</option>
                                <option value="select">G329</option>
                                <option value="select">G330</option>
                                <option value="select">G331</option>
                                <option value="select">G332</option>
                                <option value="select">G333</option>
                                <option value="select">G334</option>
                                <option value="select">G335</option>
                                <option value="select">G360</option>
                                <option value="select">G361</option>
                                <option value="select">G362</option>
                                <option value="select">G363</option>
                                <option value="select">G364</option>
                                <option value="select">G365</option>
                                <option value="select">G366</option>
                                <option value="select">LPT 5416T</option>
                                <option value="select">LPT 1761</option>
                                <option value="select">LPT 5858</option>
                                <option value="select">LPT 6051</option>
                                <option value="select">LPT 212398</option>
                                <option value="select">LPT 5891</option>
                                <option value="select">LPT 60030</option>
                                <option value="select">LPT 635054</option>
                                <option value="select">LPT 6035</option>
                                <option value="select">LPT 53507</option>
                                <option value="select">LPT 6147</option>
                                <option value="select">LPT 5799</option>
                                <option value="select">LPT 6143</option>
                                <option value="select">LPT 212444</option>
                                <option value="select">LPT 635718</option>
                                <option value="select">LPT 635640</option>
                                <option value="select">LPT 491</option>
                                <option value="select">LPT 481428</option>
                                <option value="select">LPT RST 02</option>
                                <option value="select">LPT RST 03</option>
                                <option value="select">LPT 35</option>
                                <option value="select">LPT 3659 P</option>
                                <option value="select">LPT 54402</option>
                                <option value="select">LPT 77114 P</option>
                                <option value="select">LPT 148817</option>
                                <option value="select">LPT 602</option>
                                <option value="select">LPT 635329</option>
                                <option value="select">LPT 984</option>
                                <option value="select">LPT 5509</option>
                                <option value="select">LPT 5336</option>
                                <option value="select">LPT 1827</option>
                                <option value="select">LPT 733</option>
                                <option value="select">LPT 216885</option>
                                <option value="select">LPT 339310</option>
                                <option value="select">LPT R 2291</option>
                                <option value="select">LPT 635732</option>
                                <option value="select">LPT 13</option>
                                <option value="select">LPT 65319</option>
                                <option value="select">LPT 460P</option>
                                <option value="select">LPT 53723</option>
                                <option value="select">LPT 54335</option>
                                <option value="select">LPT 53573</option>
                                <option value="select">LPT 38311</option>
                                <option value="select">LPT 593</option>
                                <option value="select">LPT 53872</option>
                                <option value="select">LPT 635860</option>
                                <option value="select">LPT 378</option>
                                <option value="select">LPT 48-876</option>
                                <option value="select">LPT 21553</option>
                                <option value="select">LPT T 18</option>
                                <option value="select">LPT 53833</option>
                            </Input>
                        </FormGroup>
                    </Col>   
                </Row>
            </div>
        );
    }
}   

