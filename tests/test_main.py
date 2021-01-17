"""Test cases for the __main__ module."""
from typer.testing import CliRunner

# from cookiecutter_cruft_poetry_tox_pre_commit_ci_cd_instance import __main__

runner = CliRunner()


def test_main_succeeds() -> None:
    """It exits with a status code of zero."""
    result = runner.invoke(__main__.main)
    assert result.exit_code == 0
