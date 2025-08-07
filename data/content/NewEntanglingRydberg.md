&nbsp;&nbsp;&nbsp;&nbsp;Rydberg atoms are highly excited atoms which have an electron with a very high principal quantum number $n$. They have been utilized for quantum computation due to a phenomenon called a Rydberg blockade. 

When a certain atom A is in a Rydberg excited state, another atom B in its proximity will feel a dipole force stemming from the Rydberg atom. This leads to the energy levels of atom B shifting, making its transitions non-resonant with the laser.

The qubit is usually encoded in the hyperfine structure of the ground state, where one level (the ground state) corresponds to the $\ket{0}$ computational state and another excited level corresponds to the state $\ket{1}$. The Rydberg state $\ket{r}$ is used as an intermediate state to realize two-qubit gates; it does not represent one of the computational states.

A certain laser frequency $\omega$ is used for the $\ket{0} \rightarrow \ket{1}$ transition. Thus, when atom A is in state $\ket{r}$, the laser frequency $\omega$ cannot excite atom B. *Voila!* We have achieved conditional logic.

&nbsp;&nbsp;&nbsp;&nbsp;In a new paper by G. Giudici titled _"Fast Entangling Gates for Rydberg Atoms via Resonant Dipole-Dipole Interaction"_ [@mainpaper], they modify this scheme such that they now use two Rydberg states $\ket{r_1}$ and $\ket{r_2}$, as depicted in Figure \ref{schemeNewEntanglingRydberg}. 

The computational state $\ket{1}$ is optically coupled to the first Rydberg level, while the Rydberg levels are coupled to each other using a microwave field. This leads to a dipole interaction between the two Rydberg level pairs.
<br><br>
<a href="data/img/schemeNewEntanglingRydberg.png" target="_blank">
  <img class="centered-image" src="data/img/schemeNewEntanglingRydberg.png" alt="Hamiltonian Figure">
</a>

<br><br>

                        Figure 1: Energy level schematic representing the novel approach to Rydberg
                                  entangling gates as depicted in [1]


<br><br>

&nbsp;&nbsp;&nbsp;&nbsp;The phase and amplitude of the microwave laser field are the time-dependent controllable variables in the experiment. The optimal control protocol of these variables is found by using gradient ascent pulse engineering (GRAPE), which is a numerical optimization technique for quantum control. This scheme improves upon previous entangling protocols using Rydberg blockades by 20%. Additionally, this scheme shows less sensitivity to Rydberg decay and decreases hardware requirements since it is based on phase and amplitude modulation of the microwave field — and not on phase shaping of optical pulses.


<br><br>

# *References*
*[1] Giudici, G., Veroni, S., Giudice, G., Pichler, H., & Zeiher, J. (2025). Fast entangling gates for Rydberg atoms via resonant dipole–dipole interaction.PRX Quantum, 6(3), 030308. https://doi.org/10.1103/5d8p-3hm1*

<br><br>
<br><br><br><br>