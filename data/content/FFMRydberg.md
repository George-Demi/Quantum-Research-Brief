&nbsp;&nbsp;&nbsp;&nbsp;Two-qubit gates are crucial to achieve universal quantum computation. In any quantum computing physical platform, to construct such two-qubit gates, one needs to utilize interactions. For neutral atoms, one such interaction arises when two atoms are put into a highly excited Rydberg state — they can interact via dipole-dipole or van der Waals forces. This interaction allows for the construction of two-qubit gates via the phenomenon called the Rydberg blockade.

&nbsp;&nbsp;&nbsp;&nbsp;The Rydberg blockade is when the interaction between two neutral atoms prohibits their simultaneous excitation. In the same vein, physicists can also achieve a phenomenon called the Rydberg anti-blockade, which is when two atoms are excited to Rydberg states despite their interaction. This happens because we can tune the laser such that the interaction-induced energy shift of the second atom (due to the presence of the first atom) is compensated. To realize this phenomenon, one needs to set the laser detuning $\Delta$ between the level of concern and the Rydberg level to half the Rydberg interaction strength $ V $,This is a way to simultaneously excite two atoms, thus enabling two-qubit gate construction.
<br><br>

### Challenges of Rydberg Anti-Blockade

&nbsp;&nbsp;&nbsp;&nbsp;However, realizing a Rydberg anti-blockade comes with many challenges:

1. Narrow resonance condition $ 2\Delta=V $, which might be broken due to variation in interatomic distance or laser detuning.  
2. The achieved doubly excited state decays quickly due to spontaneous emission.  
3. To determine which pairs undergo Rydberg anti-blockade, individual addressing is typically required.

<br><br>
### Floquet Solution to Anti-Blockade

In a recent paper by J. Wu et al. [@mainpaper], these challenges are overcome by using Floquet frequency modulation techniques to realize Rydberg anti-blockade irrespective of the Rydberg interaction strength. 

Their scheme:
- Provides a way to stabilize the doubly-excited states regardless of the interatomic distance.
- Allows performing two-qubit gates without the need for individual addressing.

<br><br>

<a href="data/img/schemeFFMRydberg.png" target="_blank">
  <img class="centered-image" src="data/img/schemeFFMRydberg.png" alt="Hamiltonian Figure">
</a>

<br><br>

                     Figure 1: Energy level schematic of the driven three-level system as depicted in [1] 

<br><br>

### Two-Atom Floquet Scheme

A two-atom version of the scheme consists of two neutral atoms with:
- Two hyperfine levels $\ket{0}$ and $\ket{1}$ to encode the qubit.
- A Rydberg state $\ket{r}$.

As illustrated in Figure [1], the levels $\ket{1}$ and $\ket{r}$ are coupled via a laser. However, unlike previous Rydberg schemes, the detuning $\Delta(t)$ here is time-dependent, depending on the frequency and amplitude the system is driven with.

<br><br>
<br><br>