package_json(
    name="ts-pkg",
    dependencies=[":ts-config", ":ts-src"],
    scripts=[
        # node_test_script(
        #     coverage_args=["--coverage", "--coverage-directory=.coverage/"],
        #     coverage_output_files=[".coverage/lcov-report/index.html"],
        #     coverage_output_directories=[".coverage/lcov-report"],
        # ),
        node_build_script(
            entry_point="build",
            extra_env_vars=["FOO=BAR"],
            output_directories=["dist"],
        ),
    ],
)

resources(
    name="ts-config",
    sources=["tsconfig.json"]
)

# The ts src dependency seems not to be inferred, unlike for js
resources(
    name="ts-src",
    sources=["src/**"]
)
