import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FilePDFSolid.svg';

export function FilePDFSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FilePDFSolid">
      <SVG />
    </Icon>
  );
}
