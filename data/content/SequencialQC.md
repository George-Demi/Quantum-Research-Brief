Quantum computers have diverse architectures and different hardware implementations. Different approaches have their distinct advantages and shortcomings: quantum annealers are good at solving optimization problems while digital quantum computers allow us to realize gate-based quantum algorithms. Different hardware implementations are also unique in their pros and cons: superconducting circuits are scalable and offer fast gate operations while trapped ions offer high gate fidelity and long-range connectivity.

A new paper published on arXiv by Romero et al. [^1] discusses how different quantum computing technologies can be combined to solve a problem better. They consider an optimization problem where the solution is given by the ground state of a higher-order Ising model. This can be done on a quantum annealer by adiabatically evolving a system which is in the ground state of a known Hamiltonian to a system whose ground state is the solution to the optimization problem.

To accelerate this process, one can introduce auxiliary counterdiabatic terms. This resembles walking while holding a full glass of water: in order to not spill it, one should walk slowly; however, one can move the glass in a certain pattern such that even if one walks faster, the water does not spill. These auxiliary terms act as the protective hand motion.

Furthermore, one can also use BF-DCQO (bias field digitized counterdiabatic quantum optimization), which iteratively performs DCQO by taking the output from the previous step as the input of the next step.

The implementation of such Hamiltonians, which possess these auxiliary terms, is difficult on a quantum annealer due to non-stoquasticity. Therefore, the process is digitized, which leads to digitized counterdiabatic quantum optimization (DCQO). This leads to the proposal suggested by Romero et al., of using a D-Wave quantum annealer to achieve a “fast but not so-high quality solution” and using it as the initial guess for the BF-DCQO performed on IBM's superconducting processor.

# References

[^1]: Romero, S. V., Cadavid, A. G., Solano, E., & Hegade, N. N. (2025, June 25). *Sequential Quantum Computing*. [arXiv:2506.20655](https://arxiv.org/abs/2506.20655) [quant‑ph]
