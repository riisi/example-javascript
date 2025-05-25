package_json(
    name="ts-pkg",
    dependencies=[":ts-src", ":tsconfig-json"],
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

# TODO: unmatched globs? 
typescript_sources(name="tsconfig")

# Needed for the build script
resource(
    name="tsconfig-json",
    source="tsconfig.json"
)

# The ts src dependency seems not to be inferred, unlike for js
resources(
    name="ts-src",
    sources=["src/**"]
)
