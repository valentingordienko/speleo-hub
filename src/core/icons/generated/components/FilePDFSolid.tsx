import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilePDFSolid.svg';

export function FilePDFSolid(props: TProps) {
  return (
    <Icon {...props} name="FilePDFSolid">
      <SVG />
    </Icon>
  );
}
