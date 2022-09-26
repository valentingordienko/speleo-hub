import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ImportSolid.svg';

export function ImportSolid(props: TProps) {
  return (
    <Icon {...props} name="ImportSolid">
      <SVG />
    </Icon>
  );
}
