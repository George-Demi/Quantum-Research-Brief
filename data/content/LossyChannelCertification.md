&nbsp;&nbsp;&nbsp;&nbsp; Transmitting quantum information safely is an essential aspect in the field of quantum technologies. Therefore, to exchange quantum messages, it is not enough to find a physical platform that allows us to do so, but also to come up with certification protocol  which certify that an eavesdropper has not tampered with the information. Such protocols are safer if they are device-independen , i.e., we do not rely on the assumption that we are in possession of trustworthy devices which perform certain tests as part of the certification protocol.

&nbsp;&nbsp;&nbsp;&nbsp;In a recent paper by S. Neves et al , they propose a way to accomplish certification protocols involving minimal assumptions about the trustworthiness of the physical devices present in the protocol. Their protocol takes into account transmission losse .

&nbsp;&nbsp;&nbsp;&nbsp;A channel is what takes a qubit from Alic  and transmits it to Bo . In order to account for losses in such a channel, they model the channel as a completely positive trace-decreasing (CPTD  map $\mathcal{E}$. Since this is a probabilistic channe  (it might not transmit the message due to losses), they generalize the diamond fidelit  (a quantity which allows us to measure how close two quantum channels are) for probabilistic channels. The generalized diamond fidelit  is the quantity which allows them to check that a certain physical channel $\mathcal{E}$ and a reference channel $\mathcal{E}_0$ apply the same operation on the state which is the message — *under the condition that the message was transmitted*.

&nbsp;&nbsp;&nbsp;&nbsp;Knowing how to quantify the fidelity of the channel, Alice sends Bob one part of an entangled bipartite stat  (called the probe stat ) which she has prepared. Afterwards, they both perform measurements, and by repeating this multiple times they build Bell statistic . This allows them to find a lower bound on the generalized diamond fidelit .It is also worth mentioning that their protocol does not assume identical independent distribution (IID — the assumption that each channel use is independent of other channel uses.

&nbsp;&nbsp;&nbsp;&nbsp;The authors also provide an experimental implementatio  of a one-sided device-independent settin  (where the sender is trusted) using polarization-entangled photon pair .


<br><br>

## *References*
*[1] Neves, S., dos Santos Martins, L., Yacoub, V., Lefebvre, P., ˇSupi´c,
I., Markham, D., & Diamanti, E. (2025). Experimentally certified
transmission of a quantum message through an untrusted and lossy
quantum channel via Bell’s theorem. PRX Quantum, 6(3), 030312.
https://doi.org/10.1103/PRXQuantum.6.030312*