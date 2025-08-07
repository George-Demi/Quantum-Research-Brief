
Present day computers are able to generate pseudo-random numbers. The reason we say that they are pseudo-random is that they start from an initial value called a seed and they apply a mathematical function on it to generate a random number which becomes the seed of the next random number you want to generate. However, if an adversary knows the seed and the mathematical function that you are using, they can predict the random number which is going to be generated next.

If one wants to achieve true randomness, one needs to harness the randomness which nature provides: **Quantum uncertainty**. This allows us to achieve randomness at the hardware level since quantum systems are described by a probabilistic theory. 

So for example, if we want to generate a random binary digit, we can perform a polarization measurement in the standard basis on a certain photon which is in an equal superposition of horizontal and vertical polarizations. One of the outcomes is assigned the value  0, and the other is assigned the value 1.

These physical sources of entropy are non-deterministic; however, they require trusting the physical components of the source. This means that there is no way to _a priori_ certify the randomness of the output of the source. A new paper by Kavuri et al. [Traceable random numbers from a non-local quantum advantage](https://doi.org/10.1038/s41586-025-09054-3) describes a protocol that makes the process of random number generation traceable such that randomness can be verified.

Their protocol is based on device-independent techniques. As a source for randomness, they utilize **non-local quantum correlations**, and to make the process verifiable and traceable, they use **distributed intertwined hash chains**.

<br><br>

# *References*

*1. Kavuri, G.A., Palfree, J., Reddy, D.V. et al. *Traceable random numbers from a non-local quantum advantage*. Nature 642, 916–921 (2025). [https://doi.org/10.1038/s41586-025-09054-3](https://doi.org/10.1038/s41586-025-09054-3)*
