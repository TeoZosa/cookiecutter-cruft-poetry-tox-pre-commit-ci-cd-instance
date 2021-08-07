import mypyc.build


def build(setup_kwargs: dict) -> None:
    """
    This function is mandatory in order to build the extensions.
    """
    setup_kwargs.update(
        {
            "ext_modules": mypyc.build.mypycify(
                [
                    "--disallow-untyped-defs",
                    "cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/__init__.py",
                    "cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance/main.py",
                ]
            ),
        }
    )
