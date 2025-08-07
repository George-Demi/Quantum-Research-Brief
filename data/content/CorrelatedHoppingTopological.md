
The theme of topology in quantum physics has gained a lot of attention lately. The study of topological phases of matter which are characterized by global topological invariants—such as topological insulators topological superconductors and quantum computation using anyons—has become a central topic of research.

One important example is the Su-Schrieffer-Heeger (SSH) model a one-dimensional tight-binding model. For a certain choice of hopping parameters, the SSH Hamiltonian exhibits topological properties like the emergence of zero-energy edge states. In this case, the topological order arises purely from the single-particle Hamiltonia.

In a recent paper by *A. Padhan et al.*[^1], the authors ask whether it's possible to construct a model in which interactions themselves give rise to topological behavior—that is, the non-interacting system is topologically trivial, and turning on interactions causes a transition to a topologically non-trivial phase.

They answer this question by proposing a Hamiltonian comprised of spinful fermionic modes where the hopping of one component \(\downarrow\) depends on the density of the other \(\uparrow\). Additionally, the \(\uparrow\) component experiences a staggered on-site potential. Their model is illustrated in the figure below.

### Model Hamiltonian

The Hamiltonian is given by:

$$
H = -t_{\uparrow} \sum_i \left(c^\dagger_{i\uparrow} c_{i+1\uparrow} + \text{h.c.}\right)  \Delta_{\uparrow} \sum_i (-1)^i n_{i\uparrow} - t_{\downarrow} \sum_i n_{i\uparrow} \left(c^\dagger_{i\downarrow} c_{i+1\downarrow} + \text{h.c.}\right)
$$

where:

- $ \(c_{i\sigma}\)$ is the annihilation operator for spin component \(\sigma \in \{\uparrow, \downarrow\}\) at site \(i\),
- $\(n_{i\sigma} = c^\dagger_{i\sigma} c_{i\sigma}\)$ is the number operator,
- $\(t_{\uparrow}, t_{\downarrow}\)$ are the hopping amplitudes, and
- $\(\Delta_{\uparrow}\)$ is the staggered potential for the \(\uparrow\) component.

When the hopping of the $\(\downarrow\)$ component is density-dependent the $\(\downarrow\)$ sector becomes gapped. Furthermore, when $\(\Delta_{\uparrow} > 0\)$, the system displays topological behavior despite being trivial in the absence of interactions. <br><br>
<br><br>




<a href="img/schemeCorrelatedHoppingTopology.png" target="_blank">
  <img class="centered-image" src="data/img/schemeCorrelatedHoppingTopology.png" alt="Hamiltonian Figure">
</a>
<br><br>

                        Figure 1: Illustration of the system modeled by the Hamiltonian in equation 1
                                  as depicted in [1].
<br><br>
### Key Findings

The authors emphasize that, unlike the SSH model, the phase transition here does not involve a gap closing. Instead, the topological character of the system arises from competition between the staggered potential \(\Delta_{\uparrow}\) and the correlated hopping term.

Importantly, they also show that this interaction-induced topology can be explored experimentally as the model is defined for a finite-sized system with boundaries—a setting that is feasible in modern atomic, molecular, and optical (AMO) platforms.


<br><br>
---
## References
[^1]: A. Padhan et al., *Interaction-induced topological phases in spinful fermionic systems with correlated hopping*, [arXiv:xxx.xxxxx](https://arxiv.org/abs/xxx.xxxxx)

<br><br>
<br><br>
<br><br>
<br><br>
<br><br>